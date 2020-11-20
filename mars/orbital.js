// Copyright 2011 Google Inc. All Rights Reserved.
// All Rights Reserved

/**
 * @fileoverview JS code.
 *
 * @author bcs@google.com   (Benjamin Shropshire)
 */

var orbital = {};

// http://en.wikipedia.org/wiki/Epoch_(astronomy)#Julian_years_and_J2000
orbital.J2000 = 2451545.0

orbital.meters_per_au = 149598000000

orbital.deg2rad = Math.PI/180;

orbital.data = {  // From: http://ssd.jpl.nasa.gov/txt/p_elem_t1.txt
  'mercury' : {
    'a'     : (0.38709927 * orbital.meters_per_au),
    'a_'    : (0.00000037 * orbital.meters_per_au),
    'e'     : 0.20563593,
    'e_'    : 0.00001906,
    'I'     : 7.00497902      * orbital.deg2rad,
    'I_'    : -0.00594749     * orbital.deg2rad,
    'L'     : 252.25032350    * orbital.deg2rad,
    'L_'    : 149472.67411175 * orbital.deg2rad,
    'w_bar' : 77.45779628     * orbital.deg2rad,
    'Ohm'   : 48.33076593     * orbital.deg2rad,
    'w__'   : 0.16047689      * orbital.deg2rad,
    'Ohm_'  : -0.12534081     * orbital.deg2rad,
  },
  'venus' : {
    'a'     : (0.72333566 * orbital.meters_per_au),
    'a_'    : (0.00000390 * orbital.meters_per_au),
    'e'     : 0.00677672,
    'e_'    : -0.00004107,
    'I'     : 3.39467605     * orbital.deg2rad,
    'I_'    : -0.00078890    * orbital.deg2rad,
    'L'     : 181.97909950   * orbital.deg2rad,
    'L_'    : 58517.81538729 * orbital.deg2rad,
    'w_bar' : 131.60246718   * orbital.deg2rad,
    'Ohm'   : 76.67984255    * orbital.deg2rad,
    'w__'   : 0.00268329     * orbital.deg2rad,
    'Ohm_'  : -0.27769418    * orbital.deg2rad,
  },
  'earth' : {
    'a'     : (1.00000261 * orbital.meters_per_au),
    'e'     : 0.01671123,
    'I'     : -0.00001531    * orbital.deg2rad, // rad (a.k.a. 'i')
    'L'     : 100.46457166   * orbital.deg2rad, // rad (mean loggitude)
    'L_'    : 35999.37244981 * orbital.deg2rad, // rad/cet (loggitude rate)
    'w_bar' : 102.93768193   * orbital.deg2rad, // rad (a.k.a. 'omega', loggitude of perihelion)
    'Ohm'   : 102.93768193   * orbital.deg2rad, // rad (a.k.a. 'Omega', loggitude of assending node)
  },
  'mars' : {
    'a'     : (1.52371034 * orbital.meters_per_au),
    'e'     : 0.09339410,
    'I'     : -1.84969142    * orbital.deg2rad, // rad (a.k.a. 'i')
    'L'     : -4.55343205    * orbital.deg2rad, // rad (a.k.a. '?')
    'L_'    : 19140.30268499 * orbital.deg2rad, // rad/cet (loggitude rate)
    'w_bar' : -23.94362959   * orbital.deg2rad, // rad (a.k.a. 'omega', loggitude of perihelion)
    'Ohm'   : 49.55953891    *orbital.deg2rad, // rad (a.k.a. 'Omega', loggitude of assending node)
  },
  'jupiter' : {
    'a'     : (5.20288700  * orbital.meters_per_au),
    'a_'    : (-0.00011607 * orbital.meters_per_au),
    'e'     : 0.04838624,
    'e_'    : -0.00013253,
    'I'     : 1.30439695     * orbital.deg2rad,
    'I_'    : -0.00183714    * orbital.deg2rad,
    'L'     : 34.39644051    * orbital.deg2rad,
    'L_'    : 3034.74612775  * orbital.deg2rad,
    'w_bar' : 14.72847983    * orbital.deg2rad,
    'Ohm'   : 100.47390909   * orbital.deg2rad,
    'w__'   : 0.21252668     * orbital.deg2rad,
    'Ohm_'  : 0.20469106     * orbital.deg2rad,
  },
  'saturn' : {
    'a'     : (9.53667594  * orbital.meters_per_au),
    'a_'    : (-0.00125060 * orbital.meters_per_au),
    'e'     : 0.05386179,
    'e_'    : -0.00050991,
    'I'     : 2.48599187    * orbital.deg2rad,
    'I_'    : 0.00193609    * orbital.deg2rad,
    'L'     : 49.95424423   * orbital.deg2rad,
    'L_'    : 1222.49362201 * orbital.deg2rad,
    'w_bar' : 92.59887831   * orbital.deg2rad,
    'Ohm'   : 113.66242448  * orbital.deg2rad,
    'w__'   : -0.41897216   * orbital.deg2rad,
    'Ohm_'  : -0.28867794   * orbital.deg2rad,
  },
  'uranus' : {
    'a'     : (19.18916464 * orbital.meters_per_au),
    'a_'    : (-0.00196176 * orbital.meters_per_au),
    'e'     : 0.04725744,
    'e_'    : -0.00004397,
    'I'     : 0.77263783     * orbital.deg2rad,
    'I_'    : -0.00242939    * orbital.deg2rad,
    'L'     : 313.23810451   * orbital.deg2rad,
    'L_'    : 428.48202785   * orbital.deg2rad,
    'w_bar' : 170.95427630   * orbital.deg2rad,
    'Ohm'   : 74.01692503    * orbital.deg2rad,
    'w__'   : 0.40805281     * orbital.deg2rad,
    'Ohm_'  : 0.04240589     * orbital.deg2rad,
  },
  'neptune' : {
    'a'     : (30.06992276 * orbital.meters_per_au),
    'a_'    : (0.00026291  * orbital.meters_per_au),
    'e'     : 0.00859048,
    'e_'    : 0.00005105,
    'I'     : 1.77004347    * orbital.deg2rad,
    'I_'    : 0.00035372    * orbital.deg2rad,
    'L'     : -55.12002969  * orbital.deg2rad,
    'L_'    : 218.45945325  * orbital.deg2rad,
    'w_bar' : 44.96476227   * orbital.deg2rad,
    'Ohm'   : 131.78422574  * orbital.deg2rad,
    'w__'   : -0.32241464   * orbital.deg2rad,
    'Ohm_'  : -0.00508664   * orbital.deg2rad,
  },
  'pluto' : {
    'a'     : (39.48211675 * orbital.meters_per_au),
    'a_'    : (-0.00031596 * orbital.meters_per_au),
    'e'     : 0.24882730,
    'e_'    : 0.00005170,
    'I'     : 17.14001206    * orbital.deg2rad,
    'I_'    : 0.00004818     * orbital.deg2rad,
    'L'     : 238.92903833   * orbital.deg2rad,
    'L_'    : 145.20780515   * orbital.deg2rad,
    'w_bar' : 224.06891629   * orbital.deg2rad,
    'Ohm'   : 110.30393684   * orbital.deg2rad,
    'w__'   : -0.04062942    * orbital.deg2rad,
    'Ohm_'  : -0.01183482    * orbital.deg2rad,
  },
}

orbital.Lead = function(par, ang) {
  return {
    a     : par.a,
    e     : par.e,
    I     : par.I,
    L     : par.L + ang,
    L_    : par.L_,
    w_bar : par.w_bar,
    Ohm   : par.Ohm
  }
}

orbital.InjectLPoints = function() {
  orbital.data['earth_l4'] = orbital.Lead(orbital.data['earth'], Math.PI/3)
  orbital.data['earth_l5'] = orbital.Lead(orbital.data['earth'], -Math.PI/3)
  orbital.data['mars_l4'] = orbital.Lead(orbital.data['mars'], Math.PI/3)
  orbital.data['mars_l5'] = orbital.Lead(orbital.data['mars'], -Math.PI/3)
}

/// Algoritum from http://iau-comm4.jpl.nasa.gov/keplerformulae/kepform.pdf

orbital.EfromM = function(M, e) {
  var E = M;

  var res = "" + E;
  var i = 0;
  do {
    i++;
    m = E - e * Math.sin(E);
    m_ = 1 - e * Math.cos(E);
    if (Math.abs(m - M) < 1e-6) {
      return E;
    }
    //console.log(E + " " + (m - M));

    E = E - (m - M)*m_;
    res = res + "," + E;
  } while (i < 10);
  return E;
}


orbital.DateFromJ = function(J) {
  J = J - orbital.J2000;
  var day = Math.floor(J);
  var sec = (J - day) * 24 * 3600;
  return new Date(2000, 0, 1 + day, 12, 0, sec);
}


orbital.JFromDate = function(date) {
  var ms = date.getTime() - new Date(2000, 0, 1, 12, 0, 0).getTime();
  return ms/(24*3600*1e3) + orbital.J2000;
}


orbital.PositionAt = function(planet, J) {
  var result = "<" + planet.a +
               "," + planet.e +
               "," + planet.I +
               "," + planet.L +
               "," + planet.w_bar +
               "," + planet.Ohm + ">\n"

  var T = (J - 2451545) / (365.25 * 100);  // Pick the century
  result = result + ("<T=" + T + ">\n");

  var a     = planet.a     + (0 * T);
  var e     = planet.e     + (0 * T);
  var I     = planet.I     + (0 * T);
  var L     = planet.L     + (planet.L_ * T)
  var w_bar = planet.w_bar + (0 * T);
  var Ohm   = planet.Ohm   + (0 * T);

  var w = w_bar - Ohm;  // argument of perihelion
  var M = L - w_bar;    // mean anomoloy
  M = M - (Math.round(M / (Math.PI*2))*(Math.PI*2));  // round
  result = result + ("<M=" + M + ">\n");

  var E = orbital.EfromM(M, e);
  result = result + ("<E=" + E + ">\n");

  var x_ = planet.a * (Math.cos(E) - planet.e);
  var y_ = planet.a * Math.sqrt(1 - planet.e*planet.e) * Math.sin(E);
  result = result + ("<xy=" + x_ + "," + y_ +">\n");

  var cos_w = Math.cos(w),     sin_w = Math.sin(w);
  var cos_Ohm = Math.cos(Ohm), sin_Ohm = Math.sin(Ohm);
  var cos_I = Math.cos(I),     sin_I = Math.sin(I);

  var x_el = (cos_w*cos_Ohm - sin_w*sin_Ohm*cos_I)*x_ + (-sin_w*cos_Ohm - cos_w*sin_Ohm*cos_I)*y_
  var y_el = (cos_w*sin_Ohm + sin_w*cos_Ohm*cos_I)*x_ + (-sin_w*sin_Ohm + cos_w*cos_Ohm*cos_I)*y_
  var z_el = (sin_w*sin_I)*x_ + (cos_w*sin_I)*y_
  result = result + ("<xyz_el=" + x_el + "," + y_el + "," + z_el+">\n");

  //console.log(result)
  return {x: x_el, y: y_el, z: z_el};
}

orbital.pt2string = function(pt) {
  return "<" + pt.x.toFixed(5) + "," + pt.y.toFixed(5) + "," + pt.z.toFixed(5) + ">";
}

orbital.allPositionsAt = function(data, J) {
  var ret = {};
  for (var k in data) {
    if (!data.hasOwnProperty(k)) continue;
    //console.log(k);
    ret[k] = orbital.PositionAt(data[k], J);
  }
  return ret;
};

orbital.Distance = function(a, b) {
  var x = a.x - b.x;
  var y = a.y - b.y;
  var z = a.z - b.z;

  return Math.sqrt(x*x + y*y +z*z);
}

orbital.link_pairs = [
    ["earth", "mars"],

    ["earth", "earth_l4"],
    ["earth", "earth_l5"],
    ["earth", "mars_l4"],
    ["earth", "mars_l5"],

    ["earth_l4", "mars_l4"],
    ["earth_l4", "mars_l5"],
    ["earth_l5", "mars_l4"],
    ["earth_l5", "mars_l5"],


    ["mars", "mars_l4"],
    ["mars", "mars_l5"],
    ["mars", "earth_l4"],
    ["mars", "earth_l5"],
];

orbital.paths = [
    ["earth/mars"],

    ["earth/earth_l4", "mars/earth_l4"],
    ["earth/earth_l5", "mars/earth_l5"],
    ["earth/mars_l4", "mars/mars_l4"],
    ["earth/mars_l5", "mars/mars_l5"],

    ["earth/earth_l4", "earth_l4/mars_l4", "mars/mars_l4"],
    ["earth/earth_l4", "earth_l4/mars_l5", "mars/mars_l5"],
    ["earth/earth_l5", "earth_l5/mars_l4", "mars/mars_l4"],
    ["earth/earth_l5", "earth_l5/mars_l5", "mars/mars_l5"],
];

orbital.FromTo = function(f, t) {
  var ret = ["M", f.x/scale, ",", f.y/scale, "L" , t.x/scale, ",", t.y/scale,'z'].join("");
  //console.log(ret);
  return ret;
}

