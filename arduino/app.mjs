// JavaScript source code
import { SerialPort} from 'serialport'
import { createClient } from '@supabase/supabase-js'
import cron from 'node-cron'

const supabase = createClient(
    "https://agsfacuitdbjrlthotrv.supabase.co", 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnc2ZhY3VpdGRianJsdGhvdHJ2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NjIxMTExMywiZXhwIjoyMDAxNzg3MTEzfQ.jdJhzNIQkCd1o7hPr1Oq46nGCI0Ng7TCHsi2ZHxUO6o"
    )

let seatslog = []

async function updateLights () {
    console.log("fetching seats")
    let { data: seats, error } = await supabase.from("seats").select('*');
seats.forEach( (seat) => {
    //console.log(seat.id)
    //console.log(seat.light_status)
})
}

setInterval(updateLights, 10000)

async function checkCheckedIn () {
    let {data: res, error} = await supabase.from("reservations").select('*');
    let currentDateTime = new Date();
    let hours = currentDateTime.getHours()
    let minutes = currentDateTime.getMinutes()
    let actualTime = hours * 100 + minutes
    console.log(actualTime)
    for (var reservation of res){        
        if (actualTime >= Number(reservation.end_time)){
            console.log("deleting reservation id %s due to end of reservation", reservation.id)
            //delete the reservation
                const { error } = await supabase
                .from('reservations')
                .delete()
                .eq('id', reservation.id)

        }

        if (actualTime === Number(reservation.start_time)){
            //set seat light to on
            console.log("turning on light at seat id %s", reservation.seat_id)
            const { data, error } = await supabase.from('seats')
            .update({ seat_status: true })
            .eq('id', reservation.seat_id)
            .select()

        }
        if (actualTime === Number(reservation.start_time) + 15){
            if (!reservation.checked_in) {
                console.log("deleting reservation id %s due to not checking in ", reservation.id)
                const { error } = await supabase
                .from('reservations')
                .delete()
                .eq('id', reservation.id)

                const { data, error2 } = await supabase.from('seats')
                .update({ seat_status: false })
                .eq('id', reservation.seat_id)
                .select()
                //delete the reservation and set seat light to off
            }
        }
    }
}

cron.schedule('0 */15 * * * *', () => {
    console.log('running checkcheckedin')
    checkCheckedIn()
  });

// supabase
// .from("seats")
// .select()
// .then((data) => {
//     console.log("success")
//     console.log(data)
// })
// .catch((error) => {
//     console.log("fail")
//   console.log(JSON.stringify(error))
// });
//  var arduinoCOMPort = "COM3";

// var arduinoSerialPort = new SerialPort(arduinoCOMPort, {
//     baudrate: 9600
// });

