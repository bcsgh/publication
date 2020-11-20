// Copyright 2011 Google Inc. All Rights Reserved.
// All Rights Reserved

/**
 * @fileoverview JS code.
 *
 * @author bcs@google.com   (Benjamin Shropshire)
 */

// http://en.wikipedia.org/wiki/Shannon%E2%80%93Hartley_theorem
// http://en.wikipedia.org/wiki/Parabolic_antenna
// http://www.boeing.com/defense-space/space/bss/factsheets/601/tdrs_hij/tdrs_hij.html

var bandwidth = {}

bandwidth.log2 = function(x) { return Math.log(x) /  Math.log(2); }

bandwidth.solar = 1361;  //W/m^2
bandwidth.c = 299792458.0;   // m/sec

bandwidth.lm = function(m) {
  var ls = m / bandwidth.c;
  return ls / 60.0;
}

bandwidth.Gain = function(annt, wl) {
  return Math.pow(Math.PI*annt.d/wl,2) * annt.e_a;
}

bandwidth.HPBW = function(annt, wl) {
  return annt.k*wl/annt.d;
}

bandwidth.avalable = function(r, annt, band) {
  var B = band.base_bandwidth;
  var wl = bandwidth.c / band.base_band;

  var P_n = band.base_noise;

  var P_t = bandwidth.solar * Math.PI * Math.pow(annt.solar_d,2);

  // http://en.wikipedia.org/wiki/Parabolic_antenna#Gain
  var G_r = bandwidth.Gain(annt, wl);
  var G_t = G_r;


  // http://en.wikipedia.org/wiki/Friis_transmission_equation
  var S = P_t * G_r * G_t * Math.pow(wl / (4 * Math.PI * r), 2);

  // Assume noise is magnified by Rx Gain
  var beam_r = bandwidth.HPBW(annt, wl);
  var beam_area = Math.PI * Math.pow(beam_r,2);
  var N = P_n * beam_area;

  // http://en.wikipedia.org/wiki/Shannon%E2%80%93Hartley_theorem
  var C = B * bandwidth.log2(1 + S/N);
  //console.log(C);
  return C;  // b/sec
};

links = {
    "earth/mars": [],

    "mars/earth_l4": ["earth/earth_l4"],
    "mars/earth_l5": ["earth/earth_l5"],
    "earth/mars_l4":  ["mars/mars_l4"],
    "earth/mars_l5":  ["mars/mars_l5"],

    "earth_l4/mars_l4": ["earth/earth_l4", "mars/mars_l4"],
    "earth_l4/mars_l5": ["earth/earth_l4", "mars/mars_l5"],
    "earth_l5/mars_l4": ["earth/earth_l5", "mars/mars_l4"],
    "earth_l5/mars_l5": ["earth/earth_l5", "mars/mars_l5"],
};

bandwidth.Total = function(bw) {
  var rem = {
    "earth/earth_l4": bw["earth/earth_l4"],
    "earth/earth_l5": bw["earth/earth_l5"],
    "mars/mars_l4": bw["mars/mars_l4"],
    "mars/mars_l5": bw["mars/mars_l5"],
  }

  var bw_list = []
  for (l in links) {
    bw_list[bw_list.length] = [l.length, l, bw[l]];
  }

  bw_list.sort();

  var total = 0;

  for (var i = 0; i < bw_list.length; i++) {
    var deps = links[bw_list[i][1]];

    var pass = bw_list[i][2];

    switch(deps.length) {
      case 0:
        total += pass;
        break;

      case 1:
        pass = Math.min(pass, rem[deps[0]])
        total += pass;
        rem[deps[0]] -= pass;
        break;

      case 2:
        pass = Math.min(pass, rem[deps[0]])
        pass = Math.min(pass, rem[deps[1]])
        total += pass;
        rem[deps[0]] -= pass;
        rem[deps[1]] -= pass;
        break;
    }
  }
  return total;
}