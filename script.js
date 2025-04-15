function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
let buses = [
  {
    bus_number: "OSRTC101",
    bus_name: "Jagannath Express",
    source: "Bhubaneswar",
    destination: "Cuttack",
    departure: "08:30 AM",
    arrival: "09:15 AM"
  },
  {
    bus_number: "OSRTC102",
    bus_name: "Greenline Deluxe",
    source: "Cuttack",
    destination: "Puri",
    departure: "09:00 AM",
    arrival: "11:00 AM"
  },
	{
  bus_number: "OSRTC103",
  bus_name: "Konark Special",
  source: "Puri",
  destination: "Bhubaneswar",
  departure: "10:00 AM",
  arrival: "11:30 AM"
},
{
  bus_number: "OSRTC104",
  bus_name: "Sambalpur Superfast",
  source: "Sambalpur",
  destination: "Bhubaneswar",
  departure: "06:30 AM",
  arrival: "12:30 PM"
},
{
  bus_number: "OSRTC105",
  bus_name: "Berhampur Lightning",
  source: "Berhampur",
  destination: "Cuttack",
  departure: "07:15 AM",
  arrival: "11:45 AM"
},
{
  bus_number: "OSRTC106",
  bus_name: "Angul Express",
  source: "Angul",
  destination: "Bhubaneswar",
  departure: "01:00 PM",
  arrival: "03:30 PM"
},
{
  bus_number: "OSRTC107",
  bus_name: "Kalinga King",
  source: "Cuttack",
  destination: "Keonjhar",
  departure: "05:45 AM",
  arrival: "09:15 AM"
},
{
  bus_number: "OSRTC108",
  bus_name: "Balasore Blitz",
  source: "Balasore",
  destination: "Puri",
  departure: "08:00 AM",
  arrival: "12:00 PM"
},
{
  bus_number: "OSRTC109",
  bus_name: "Pallahara Rider",
  source: "Pallahara",
  destination: "Angul",
  departure: "03:15 PM",
  arrival: "04:45 PM"
},
{
  bus_number: "OSRTC110",
  bus_name: "Jagatsinghpur Express",
  source: "Jagatsinghpur",
  destination: "Cuttack",
  departure: "06:30 AM",
  arrival: "08:00 AM"
},
{
  bus_number: "OSRTC111",
  bus_name: "Dhenkanal Fast",
  source: "Dhenkanal",
  destination: "Bhubaneswar",
  departure: "07:00 AM",
  arrival: "09:00 AM"
},
{
  bus_number: "OSRTC112",
  bus_name: "Mayurbhanj Runner",
  source: "Baripada",
  destination: "Bhubaneswar",
  departure: "05:00 AM",
  arrival: "10:30 AM"
}
{
  bus_number: "OSRTC103",
  bus_name: "Konark Special",
  source: "Puri",
  destination: "Bhubaneswar",
  departure: "10:00 AM",
  arrival: "11:30 AM"
},
{
  bus_number: "OSRTC104",
  bus_name: "Sambalpur Superfast",
  source: "Sambalpur",
  destination: "Bhubaneswar",
  departure: "06:30 AM",
  arrival: "12:30 PM"
},
{
  bus_number: "OSRTC105",
  bus_name: "Berhampur Lightning",
  source: "Berhampur",
  destination: "Cuttack",
  departure: "07:15 AM",
  arrival: "11:45 AM"
},
{
  bus_number: "OSRTC106",
  bus_name: "Angul Express",
  source: "Angul",
  destination: "Bhubaneswar",
  departure: "01:00 PM",
  arrival: "03:30 PM"
},
{
  bus_number: "OSRTC107",
  bus_name: "Kalinga King",
  source: "Cuttack",
  destination: "Keonjhar",
  departure: "05:45 AM",
  arrival: "09:15 AM"
},
{
  bus_number: "OSRTC108",
  bus_name: "Balasore Blitz",
  source: "Balasore",
  destination: "Puri",
  departure: "08:00 AM",
  arrival: "12:00 PM"
},
{
  bus_number: "OSRTC109",
  bus_name: "Pallahara Rider",
  source: "Pallahara",
  destination: "Angul",
  departure: "03:15 PM",
  arrival: "04:45 PM"
},
{
  bus_number: "OSRTC110",
  bus_name: "Jagatsinghpur Express",
  source: "Jagatsinghpur",
  destination: "Cuttack",
  departure: "06:30 AM",
  arrival: "08:00 AM"
},
{
  bus_number: "OSRTC111",
  bus_name: "Dhenkanal Fast",
  source: "Dhenkanal",
  destination: "Bhubaneswar",
  departure: "07:00 AM",
  arrival: "09:00 AM"
},
{
  bus_number: "OSRTC112",
  bus_name: "Mayurbhanj Runner",
  source: "Baripada",
  destination: "Bhubaneswar",
  departure: "05:00 AM",
  arrival: "10:30 AM"
}
