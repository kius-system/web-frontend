
export default class Cola{
  nombre
  creador
  horarios
  constructor(){
    this.nombre = ""
    this.creador = ""
    this.horarios = {
      _0000_0030:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _0030_0100:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _0100_0130:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _0130_0200:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _0200_0230:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _0230_0300:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _0300_0330:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _0330_0400:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _0400_0430:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _0430_0500:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _0500_0530:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _0530_0600:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _0600_0630:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _0630_0700:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _0700_0730:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _0730_0800:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _0800_0830:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _0830_0900:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _0900_0930:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _0930_1000:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _1000_1030:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _1030_1100:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _1100_1130:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _1130_1200:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _1200_1230:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _1230_1300:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _1300_1330:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _1330_1400:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _1400_1430:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _1430_1500:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _1500_1530:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _1530_1600:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _1600_1630:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _1630_1700:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _1700_1730:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _1730_1800:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _1800_1830:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _1830_1900:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _1900_1930:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _1930_2000:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _2000_2030:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _2030_2100:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _2100_2130:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _2130_2200:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _2200_2230:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _2230_2300:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _2300_2330:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
      _2330_0000:{Lunes:false,Martes:false,Miercoles:false,Jueves:false,Viernes:false,Sabado:false,Domingo:false},
    }
  }
  setInfo = (info) =>{
    this.nombre = info.nombre
  }
  getActive = (hour, day) => {
    return this.horarios[hour][day]
  }
  setActive = (hour, day) => {
    this.horarios[hour][day] = !this.horarios[hour][day]
  }
  getReadeableHour = (hour) =>{
    switch(hour){
      case "_0000_0030": return "00:00-00:30";
      case "_0030_0100": return "00:30-01:00";
      case "_0100_0130": return "01:00-01:30";
      case "_0130_0200": return "01:30-02:00";
      case "_0200_0230": return "02:00-02:30";
      case "_0230_0300": return "02:30-03:00";
      case "_0300_0330": return "03:00-03:30";
      case "_0330_0400": return "03:30-04:00";
      case "_0400_0430": return "04:00-04:30";
      case "_0430_0500": return "04:30-05:00";
      case "_0500_0530": return "05:00-05:30";
      case "_0530_0600": return "05:30-06:00";
      case "_0600_0630": return "06:00-06:30";
      case "_0630_0700": return "06:30-07:00";
      case "_0700_0730": return "07:00-07:30";
      case "_0730_0800": return "07:30-08:00";
      case "_0800_0830": return "08:00-08:30";
      case "_0830_0900": return "08:30-09:00";
      case "_0900_0930": return "09:00-09:30";
      case "_0930_1000": return "09:30-10:00";
      case "_1000_1030": return "10:00-10:30";
      case "_1030_1100": return "10:30-11:00";
      case "_1100_1130": return "11:00-11:30";
      case "_1130_1200": return "11:30-12:00";
      case "_1200_1230": return "12:00-12:30";
      case "_1230_1300": return "12:30-13:00";
      case "_1300_1330": return "13:00-13:30";
      case "_1330_1400": return "13:30-14:00";
      case "_1400_1430": return "14:00-14:30";
      case "_1430_1500": return "14:30-15:00";
      case "_1500_1530": return "15:00-15:30";
      case "_1530_1600": return "15:30-16:00";
      case "_1600_1630": return "16:00-16:30";
      case "_1630_1700": return "16:30-17:00";
      case "_1700_1730": return "17:00-17:30";
      case "_1730_1800": return "17:30-18:00";
      case "_1800_1830": return "18:00-18:30";
      case "_1830_1900": return "18:30-19:00";
      case "_1900_1930": return "19:00-19:30";
      case "_1930_2000": return "19:30-20:00";
      case "_2000_2030": return "20:00-20:30";
      case "_2030_2100": return "20:30-21:00";
      case "_2100_2130": return "21:00-21:30";
      case "_2130_2200": return "21:30-22:00";
      case "_2200_2230": return "22:00-22:30";
      case "_2230_2300": return "22:30-23:00";
      case "_2300_2330": return "23:00-23:30";
      case "_2330_0000": return "23:30-00:00";
      default: return "Unknow Hour!";
      }
  }
}