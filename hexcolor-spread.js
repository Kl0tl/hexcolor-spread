import { rgb, rgba, float3, float4 } from 'hexcolor';

rgb.spread = function (vec) {
  return rgba(vec[0], vec[1], vec[2], 255);
};

rgba.spread = function (vec) {
  return rgba(vec[0], vec[1], vec[2], vec[3]);
};

float3.spread = function (vec) {
  return rgba(vec[0] * 255, vec[1] * 255, vec[2] * 255, 255);
};

float4.spread = function (vec) {
  return rgba(vec[0] * 255, vec[1] * 255, vec[2] * 255, vec[3] * 255);
};
