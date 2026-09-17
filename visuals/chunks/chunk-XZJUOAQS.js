import {
  __toESM,
  require_react
} from "/scalemap-skeleton/visuals/chunks/chunk-2I5PAATC.js";

// ../../../../private/var/folders/qr/91qws8gs1w50j6wlj202tbnc0000gn/T/tmp.uqsJpFb5oI/components/visuals/identity.ts
var import_react = __toESM(require_react());
var FALLBACK = {
  company: "Your company",
  domain: "your-business.example.com",
  person: "You"
};
function initialsOf(name) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "\u2014";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
function tidyDomain(d) {
  return d.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");
}
function resolveIdentity(id) {
  const company = id?.company?.trim() || FALLBACK.company;
  const domain = tidyDomain(id?.domain?.trim() || FALLBACK.domain);
  const person = id?.person?.trim() || company;
  return {
    company,
    domain,
    person,
    initials: initialsOf(person),
    email: `hello@${domain}`,
    isEmpty: !id?.company && !id?.domain && !id?.person,
    hasPerson: Boolean(id?.person?.trim()),
    hasCompany: Boolean(id?.company?.trim())
  };
}
function fitScale(text, comfort, floor = 0.62) {
  if (text.length <= comfort) return 1;
  return Math.max(floor, comfort / text.length);
}
var Ctx = (0, import_react.createContext)(resolveIdentity(null));
var IdentityProvider = Ctx.Provider;
function useIdentity() {
  return (0, import_react.useContext)(Ctx);
}

export {
  resolveIdentity,
  fitScale,
  IdentityProvider,
  useIdentity
};
