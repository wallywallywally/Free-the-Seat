// JavaScript source code
import { SerialPort} from 'serialport'
//import { createClient } from '@supabase/supabase-js'
//var SerialPort = require("serialport");
import { createClient } from '@supabase/supabase-js'


const supabase = createClient(
    "https://agsfacuitdbjrlthotrv.supabase.co", 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnc2ZhY3VpdGRianJsdGhvdHJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYyMTExMTMsImV4cCI6MjAwMTc4NzExM30.pqHLZrrIzMQgM-BSsCaIzcodSgfaYtvIDmwxDYENRYE"
    )
console.log("hello world!")

//  var arduinoCOMPort = "COM3";

// var arduinoSerialPort = new SerialPort(arduinoCOMPort, {
//     baudrate: 9600
// });

