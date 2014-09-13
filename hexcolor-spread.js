import * as hexcolor from 'hexcolor';

hexcolor.rgb.spread = function (vec) {
  return hexcolor.rgba(vec[0], vec[1], vec[2], 255);
};

hexcolor.rgba.spread = function (vec) {
  return hexcolor.rgba(vec[0], vec[1], vec[2], vec[3]);
};

hexcolor.float3.spread = function (vec) {
  return hexcolor.rgba(vec[0] * 255, vec[1] * 255, vec[2] * 255, 255);
};

hexcolor.float4.spread = function (vec) {
  return hexcolor.rgba(vec[0] * 255, vec[1] * 255, vec[2] * 255, vec[3] * 255);
};
