// ../../../../private/var/folders/qr/91qws8gs1w50j6wlj202tbnc0000gn/T/tmp.iE4usXHG8y/components/visuals/assets/cedric.png
var cedric_default = "../assets/cedric-UZDFAR5T.png";

// ../../../../private/var/folders/qr/91qws8gs1w50j6wlj202tbnc0000gn/T/tmp.iE4usXHG8y/components/visuals/assets/felix.png
var felix_default = "../assets/felix-B73ZFNV5.png";

// ../../../../private/var/folders/qr/91qws8gs1w50j6wlj202tbnc0000gn/T/tmp.iE4usXHG8y/components/visuals/assets/host-cam.png
var host_cam_default = "../assets/host-cam-HYS5VZ6K.png";

// ../../../../private/var/folders/qr/91qws8gs1w50j6wlj202tbnc0000gn/T/tmp.iE4usXHG8y/components/visuals/assets/jason.png
var jason_default = "../assets/jason-MKGITO7A.png";

// ../../../../private/var/folders/qr/91qws8gs1w50j6wlj202tbnc0000gn/T/tmp.iE4usXHG8y/components/visuals/assets/philipp.png
var philipp_default = "../assets/philipp-2IQKU3LJ.png";

// ../../../../private/var/folders/qr/91qws8gs1w50j6wlj202tbnc0000gn/T/tmp.iE4usXHG8y/components/visuals/assets/scott.jpg
var scott_default = "../assets/scott-TBVEWOEZ.jpg";

// ../../../../private/var/folders/qr/91qws8gs1w50j6wlj202tbnc0000gn/T/tmp.iE4usXHG8y/components/visuals/assets/shamayah.png
var shamayah_default = "../assets/shamayah-2A6CLRMD.png";

// ../../../../private/var/folders/qr/91qws8gs1w50j6wlj202tbnc0000gn/T/tmp.iE4usXHG8y/components/visuals/assets/sheila.png
var sheila_default = "../assets/sheila-LKPK2WLX.png";

// ../../../../private/var/folders/qr/91qws8gs1w50j6wlj202tbnc0000gn/T/tmp.iE4usXHG8y/components/visuals/assets/tejas.png
var tejas_default = "../assets/tejas-AXRGV6QG.png";

// ../../../../private/var/folders/qr/91qws8gs1w50j6wlj202tbnc0000gn/T/tmp.iE4usXHG8y/components/visuals/assets.ts
var srcOf = (m) => typeof m === "string" ? m : m.src ?? "";
var PEOPLE = [
  { name: "Tejas", src: srcOf(tejas_default) },
  { name: "Felix", src: srcOf(felix_default) },
  { name: "Jason", src: srcOf(jason_default) },
  { name: "Philipp", src: srcOf(philipp_default) },
  { name: "Shamayah", src: srcOf(shamayah_default) },
  { name: "Cedric", src: srcOf(cedric_default) },
  { name: "Sheila", src: srcOf(sheila_default) }
];
var ME = srcOf(host_cam_default);
var SCOTT = srcOf(scott_default);
var EVENTS_PHOTO = "https://images.unsplash.com/photo-1762968274962-20c12e6e8ecd";
var EVENTS_PHOTO_CREDIT = "Photo by Carlos Gil on Unsplash";

export {
  PEOPLE,
  ME,
  SCOTT,
  EVENTS_PHOTO,
  EVENTS_PHOTO_CREDIT
};
