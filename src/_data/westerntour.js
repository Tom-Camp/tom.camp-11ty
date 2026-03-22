const raw = require("../assets/westerntour.json");

function parsePoint(wkt) {
  if (!wkt) return null;
  const m = wkt.match(/POINT \(([-\d.]+) ([-\d.]+)\)/);
  if (!m) return null;
  return { lng: parseFloat(m[1]), lat: parseFloat(m[2]) };
}

module.exports = {
  title: raw.title,
  user: raw.user,
  entries: raw.entries.map((e) => ({
    ...e,
    coords: parsePoint(e.location),
    waypoints: (e.waypoints || [])
      .map((w) => ({ title: w.title, coords: parsePoint(w.location) }))
      .filter((w) => w.coords),
  })),
};
