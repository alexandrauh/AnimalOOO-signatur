/* @ds-bundle: {"format":4,"namespace":"AnimalOOODesignSystem_73413b","components":[{"name":"Footer","sourcePath":"components/deck/Footer.jsx"},{"name":"Header","sourcePath":"components/deck/Header.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"BiotageLogoHorizontal","sourcePath":"components/logos/BiotageLogoHorizontal.jsx"}],"sourceHashes":{"components/deck/Footer.jsx":"3b650c286804","components/deck/Header.jsx":"bd1f3338dd0f","components/icons/Icon.jsx":"fa51f661cad6","components/icons/icon-data.js":"1456a41b62a9","components/logos/BiotageLogoHorizontal.jsx":"8b83c11d5730","slides/ColorSlides.jsx":"8b00e819eeee","slides/IconSlides.jsx":"3b577c3ddcd3","slides/ImagerySlides.jsx":"8baf856f6e7c","slides/LogoSlides.jsx":"e88360b207c6","slides/OpeningSlides.jsx":"2566ac1fb721","slides/SlidePage.jsx":"d45fd36708e0","slides/TypeSlides.jsx":"266c7a48a1ae"},"inlinedExternals":[],"unexposedExports":[{"name":"asset","sourcePath":"slides/SlidePage.jsx"},{"name":"bullet","sourcePath":"slides/SlidePage.jsx"},{"name":"colorSlides","sourcePath":"slides/ColorSlides.jsx"},{"name":"groupTitle","sourcePath":"slides/SlidePage.jsx"},{"name":"iconSlides","sourcePath":"slides/IconSlides.jsx"},{"name":"imagerySlides","sourcePath":"slides/ImagerySlides.jsx"},{"name":"logoSlides","sourcePath":"slides/LogoSlides.jsx"},{"name":"note","sourcePath":"slides/SlidePage.jsx"},{"name":"openingSlides","sourcePath":"slides/OpeningSlides.jsx"},{"name":"pageTitle","sourcePath":"slides/SlidePage.jsx"},{"name":"slidePage","sourcePath":"slides/SlidePage.jsx"},{"name":"tile","sourcePath":"slides/SlidePage.jsx"},{"name":"typeSlides","sourcePath":"slides/TypeSlides.jsx"}]} */

(() => {

const __ds_ns = (window.AnimalOOODesignSystem_73413b = window.AnimalOOODesignSystem_73413b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/deck/Footer.jsx
try { (() => {
/**
 * Footer — credit line from the Figma "Footer" symbol (1:15). Inclusive Sans Medium 20px,
 * bottom-aligned, used on the cover page of the Visual Identity document.
 */
function Footer({
  text,
  text1,
  inverse = false,
  className,
  style
}) {
  const credit = text ?? text1 ?? 'Robert Järvi / Designer, Art Director Sam Svensson / Designer, Art Director';
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'nowrap',
      gap: 24,
      position: 'relative',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-cover)',
      fontWeight: 500,
      fontSize: 20,
      lineHeight: 1.2000000476837158,
      whiteSpace: 'nowrap',
      textBox: 'trim-both cap alphabetic',
      color: inverse ? 'var(--ooo-white)' : 'var(--text-credit)',
      flexShrink: 0
    }
  }, credit));
}
Object.assign(__ds_scope, { Footer, __ds_default_components_deck_Footer_cu0hsf: Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/deck/Footer.jsx", error: String((e && e.message) || e) }); }

// components/deck/Header.jsx
try { (() => {
// AnimalOOO wordmark — exact vectors from the Figma "Header" symbol (node 1:2), 312×48 box.
const WORDMARK = "<path transform=\"translate(0 0)\" d=\"M 15.729 12.008 L 26.588 45.333 L 31.462 45.333 L 17.638 5.422 L 15.729 0 L 13.824 5.418 L 11.436 12.313 L 0 45.333 L 4.874 45.333 L 8.448 34.155 L 18.553 34.155 L 17.072 29.614 L 9.902 29.614 L 13.514 18.699 L 15.729 12.008 Z\"/><path transform=\"translate(38.068 19.573)\" d=\"M 4.195 0.693 L 4.195 3.733 L 4.3 3.733 C 6.03 1.333 8.285 0 11.326 0 C 18.143 0 19.716 5.013 19.716 10.88 L 19.716 25.76 L 15.521 25.76 L 15.521 11.627 C 15.521 7.573 15.207 3.947 10.33 3.947 C 4.562 3.947 4.195 9.387 4.195 13.867 L 4.195 25.76 L 0 25.76 L 0 0.693 L 4.195 0.693 Z\"/><path transform=\"translate(68.291 7.786)\" d=\"M 5.086 12.48 L 5.086 37.547 L 0.891 37.547 L 0.891 12.48 L 5.086 12.48 Z M 2.989 0 C 4.614 0 5.978 1.387 5.978 3.04 C 5.978 4.747 4.614 6.08 2.989 6.08 C 1.363 6.08 0 4.747 0 3.04 C 0 1.387 1.363 0 2.989 0 Z\"/><path transform=\"translate(84.739 19.573)\" d=\"M 4.195 0.693 L 4.195 3.413 L 4.3 3.413 C 5.611 1.333 7.708 0 10.225 0 C 13.109 0 15.731 1.547 17.042 4.16 C 18.51 1.387 21.447 0 24.436 0 C 30.728 0 32.301 5.227 32.301 10.507 L 32.301 25.76 L 28.106 25.76 L 28.106 11.2 C 28.106 7.947 27.897 3.947 23.597 3.947 C 18.773 3.947 18.248 8.693 18.248 12.48 L 18.248 25.76 L 14.053 25.76 L 14.053 11.52 C 14.053 8.427 13.686 3.947 9.648 3.947 C 4.72 3.947 4.195 9.013 4.195 12.8 L 4.195 25.76 L 0 25.76 L 0 0.693 L 4.195 0.693 Z\"/><path transform=\"translate(125.511 19.573)\" d=\"M 12.323 3.947 C 7.446 3.947 4.3 8.267 4.3 12.96 C 4.3 17.867 7.131 22.507 12.375 22.507 C 17.776 22.507 20.608 18.08 20.608 13.013 C 20.608 8 17.514 3.947 12.323 3.947 Z M 24.593 0.693 L 24.593 25.76 L 20.398 25.76 L 20.398 22.293 L 20.293 22.293 C 18.143 25.067 15.259 26.453 11.798 26.453 C 4.562 26.453 0 20.213 0 13.28 C 0 6.133 4.457 0 11.851 0 C 15.207 0 18.248 1.6 20.293 4.267 L 20.398 4.267 L 20.398 0.693 L 24.593 0.693 Z\"/><path transform=\"translate(160.394 1.333)\" d=\"M 4.195 0 L 4.195 44 L 0 44 L 0 0 L 4.195 0 Z\"/><path transform=\"translate(173.011 4.427)\" d=\"M 20.608 0 C 31.882 0 41.216 9.333 41.216 20.853 C 41.216 32.427 31.882 41.6 20.608 41.6 C 9.334 41.6 0 32.427 0 20.853 C 0 9.333 9.334 0 20.608 0 Z M 20.608 4.16 C 11.536 4.16 4.405 11.68 4.405 20.8 C 4.405 29.867 11.641 37.44 20.608 37.44 C 29.574 37.44 36.811 29.867 36.811 20.8 C 36.811 11.68 29.679 4.16 20.608 4.16 Z\"/><path transform=\"translate(220.85 4.427)\" d=\"M 20.607 0 C 31.88 0 41.215 9.333 41.215 20.853 C 41.215 32.427 31.88 41.6 20.607 41.6 C 9.333 41.6 0 32.427 0 20.853 C 0 9.333 9.333 0 20.607 0 Z M 20.607 4.16 C 11.536 4.16 4.403 11.68 4.403 20.8 C 4.403 29.867 11.64 37.44 20.607 37.44 C 29.573 37.44 36.81 29.867 36.81 20.8 C 36.81 11.68 29.68 4.16 20.607 4.16 Z\"/><path transform=\"translate(268.688 4.427)\" d=\"M 20.607 0 C 31.88 0 41.215 9.333 41.215 20.853 C 41.215 32.427 31.88 41.6 20.607 41.6 C 9.333 41.6 0 32.427 0 20.853 C 0 9.333 9.333 0 20.607 0 Z M 20.607 4.16 C 11.536 4.16 4.403 11.68 4.403 20.8 C 4.403 29.867 11.64 37.44 20.607 37.44 C 29.573 37.44 36.81 29.867 36.81 20.8 C 36.81 11.68 29.677 4.16 20.607 4.16 Z\"/>";
function splitCrumb(text) {
  return String(text).split(' / ');
}

/**
 * Header — the top bar of every AnimalOOO Visual Identity page (Figma symbol "Header", 1:2).
 * Wordmark left, breadcrumb right; 48px tall, spans the 1792px content width of a 1920×1080 page.
 */
function Header({
  breadcrumb,
  text1,
  boldLast = true,
  inverse = false,
  className,
  style
}) {
  const text = breadcrumb ?? text1 ?? 'AnimalOOO / Visual Identity';
  const parts = splitCrumb(text);
  const color = inverse ? 'var(--text-on-brand)' : 'var(--text-primary)';
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      height: 48,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'nowrap',
      position: 'relative',
      boxSizing: 'border-box',
      color,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    role: "img",
    "aria-label": "AnimalOOO",
    width: 312,
    height: 48,
    viewBox: "0 0 312 48",
    fill: "currentColor",
    style: {
      flexShrink: 0,
      display: 'block'
    },
    dangerouslySetInnerHTML: {
      __html: WORDMARK
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 400,
      fontSize: 20,
      lineHeight: 1.2000000476837158,
      whiteSpace: 'nowrap',
      color: 'inherit'
    }
  }, parts.map((p, i) => {
    const last = i === parts.length - 1;
    const bold = boldLast && last && parts.length > 2;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, i > 0 ? ' / ' : '', bold ? /*#__PURE__*/React.createElement("strong", {
      style: {
        fontWeight: 700
      }
    }, p) : p);
  }))));
}
Object.assign(__ds_scope, { Header, __ds_default_components_deck_Header_dx8rmx: Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/deck/Header.jsx", error: String((e && e.message) || e) }); }

// components/icons/icon-data.js
try { (() => {
// AnimalOOO icon set — the 24 glyphs defined in the brand file (frame "Visual Identity – 43":
// "Icons are in Animal.ooo - Preline design system"). Names + geometry are Lucide
// (lucide-static@0.300.0, ISC license) — the file's glyphs are Lucide icons drawn as 1px strokes.
// Render via the sibling Icon.jsx: <Icon name="Dna" size={64} />.
let __ds_default_components_icons_icon_data_12stud1;
try {
  __ds_default_components_icons_icon_data_12stud1 = {
    "Accessibility": {
      slug: "accessibility",
      viewBox: "0 0 24 24",
      body: "<circle cx=\"16\" cy=\"4\" r=\"1\" /><path d=\"m18 19 1-7-6 1\" /><path d=\"m5 8 3-3 5.5 3-2.36 3.5\" /><path d=\"M4.24 14.5a5 5 0 0 0 6.88 6\" /><path d=\"M13.76 17.5a5 5 0 0 0-6.88-6\" />"
    },
    "Activity": {
      slug: "activity",
      viewBox: "0 0 24 24",
      body: "<path d=\"M22 12h-4l-3 9L9 3l-3 9H2\" />"
    },
    "ActivitySquare": {
      slug: "activity-square",
      viewBox: "0 0 24 24",
      body: "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" /><path d=\"M17 12h-2l-2 5-2-10-2 5H7\" />"
    },
    "AirVent": {
      slug: "air-vent",
      viewBox: "0 0 24 24",
      body: "<path d=\"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\" /><path d=\"M6 8h12\" /><path d=\"M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12\" /><path d=\"M6.6 15.6A2 2 0 1 0 10 17v-5\" />"
    },
    "Airplay": {
      slug: "airplay",
      viewBox: "0 0 24 24",
      body: "<path d=\"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1\" /><polygon points=\"12 15 17 21 7 21 12 15\" />"
    },
    "AlarmCheck": {
      slug: "alarm-check",
      viewBox: "0 0 24 24",
      body: "<circle cx=\"12\" cy=\"13\" r=\"8\" /><path d=\"M5 3 2 6\" /><path d=\"m22 6-3-3\" /><path d=\"M6.38 18.7 4 21\" /><path d=\"M17.64 18.67 20 21\" /><path d=\"m9 13 2 2 4-4\" />"
    },
    "AlarmClock": {
      slug: "alarm-clock",
      viewBox: "0 0 24 24",
      body: "<circle cx=\"12\" cy=\"13\" r=\"8\" /><path d=\"M12 9v4l2 2\" /><path d=\"M5 3 2 6\" /><path d=\"m22 6-3-3\" /><path d=\"M6.38 18.7 4 21\" /><path d=\"M17.64 18.67 20 21\" />"
    },
    "AlarmClockOff": {
      slug: "alarm-clock-off",
      viewBox: "0 0 24 24",
      body: "<path d=\"M6.87 6.87a8 8 0 1 0 11.26 11.26\" /><path d=\"M19.9 14.25a8 8 0 0 0-9.15-9.15\" /><path d=\"m22 6-3-3\" /><path d=\"M6.26 18.67 4 21\" /><path d=\"m2 2 20 20\" /><path d=\"M4 4 2 6\" />"
    },
    "Circle": {
      slug: "circle",
      viewBox: "0 0 24 24",
      body: "<circle cx=\"12\" cy=\"12\" r=\"10\" />"
    },
    "CircleSlash": {
      slug: "circle-slash",
      viewBox: "0 0 24 24",
      body: "<line x1=\"9\" x2=\"15\" y1=\"15\" y2=\"9\" /><circle cx=\"12\" cy=\"12\" r=\"10\" />"
    },
    "CircuitBoard": {
      slug: "circuit-board",
      viewBox: "0 0 24 24",
      body: "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" /><path d=\"M11 9h4a2 2 0 0 0 2-2V3\" /><circle cx=\"9\" cy=\"9\" r=\"2\" /><path d=\"M7 21v-4a2 2 0 0 1 2-2h4\" /><circle cx=\"15\" cy=\"15\" r=\"2\" />"
    },
    "Citrus": {
      slug: "citrus",
      viewBox: "0 0 24 24",
      body: "<path d=\"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z\" /><path d=\"M19.65 15.66A8 8 0 0 1 8.35 4.34\" /><path d=\"m14 10-5.5 5.5\" /><path d=\"M14 17.85V10H6.15\" />"
    },
    "Clapperboard": {
      slug: "clapperboard",
      viewBox: "0 0 24 24",
      body: "<path d=\"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z\" /><path d=\"m6.2 5.3 3.1 3.9\" /><path d=\"m12.4 3.4 3.1 4\" /><path d=\"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z\" />"
    },
    "ClipboardCheck": {
      slug: "clipboard-check",
      viewBox: "0 0 24 24",
      body: "<rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\" /><path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\" /><path d=\"m9 14 2 2 4-4\" />"
    },
    "ClipboardCopy": {
      slug: "clipboard-copy",
      viewBox: "0 0 24 24",
      body: "<rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\" /><path d=\"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2\" /><path d=\"M16 4h2a2 2 0 0 1 2 2v4\" /><path d=\"M21 14H11\" /><path d=\"m15 10-4 4 4 4\" />"
    },
    "ClipboardEdit": {
      slug: "clipboard-edit",
      viewBox: "0 0 24 24",
      body: "<rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\" /><path d=\"M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z\" /><path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5\" /><path d=\"M4 13.5V6a2 2 0 0 1 2-2h2\" />"
    },
    "Divide": {
      slug: "divide",
      viewBox: "0 0 24 24",
      body: "<circle cx=\"12\" cy=\"6\" r=\"1\" /><line x1=\"5\" x2=\"19\" y1=\"12\" y2=\"12\" /><circle cx=\"12\" cy=\"18\" r=\"1\" />"
    },
    "DivideSquare": {
      slug: "divide-square",
      viewBox: "0 0 24 24",
      body: "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\" /><line x1=\"8\" x2=\"16\" y1=\"12\" y2=\"12\" /><line x1=\"12\" x2=\"12\" y1=\"16\" y2=\"16\" /><line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"8\" />"
    },
    "Dna": {
      slug: "dna",
      viewBox: "0 0 24 24",
      body: "<path d=\"M2 15c6.667-6 13.333 0 20-6\" /><path d=\"M9 22c1.798-1.998 2.518-3.995 2.807-5.993\" /><path d=\"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993\" /><path d=\"m17 6-2.5-2.5\" /><path d=\"m14 8-1-1\" /><path d=\"m7 18 2.5 2.5\" /><path d=\"m3.5 14.5.5.5\" /><path d=\"m20 9 .5.5\" /><path d=\"m6.5 12.5 1 1\" /><path d=\"m16.5 10.5 1 1\" /><path d=\"m10 16 1.5 1.5\" />"
    },
    "DnaOff": {
      slug: "dna-off",
      viewBox: "0 0 24 24",
      body: "<path d=\"M15 2c-1.35 1.5-2.092 3-2.5 4.5M9 22c1.35-1.5 2.092-3 2.5-4.5\" /><path d=\"M2 15c3.333-3 6.667-3 10-3m10-3c-1.5 1.35-3 2.092-4.5 2.5\" /><path d=\"m17 6-2.5-2.5\" /><path d=\"m14 8-1.5-1.5\" /><path d=\"m7 18 2.5 2.5\" /><path d=\"m3.5 14.5.5.5\" /><path d=\"m20 9 .5.5\" /><path d=\"m6.5 12.5 1 1\" /><path d=\"m16.5 10.5 1 1\" /><path d=\"m10 16 1.5 1.5\" /><line x1=\"2\" x2=\"22\" y1=\"2\" y2=\"22\" />"
    },
    "Dog": {
      slug: "dog",
      viewBox: "0 0 24 24",
      body: "<path d=\"M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5\" /><path d=\"M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5\" /><path d=\"M8 14v.5\" /><path d=\"M16 14v.5\" /><path d=\"M11.25 16.25h1.5L12 17l-.75-.75Z\" /><path d=\"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306\" />"
    },
    "DollarSign": {
      slug: "dollar-sign",
      viewBox: "0 0 24 24",
      body: "<line x1=\"12\" x2=\"12\" y1=\"2\" y2=\"22\" /><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\" />"
    },
    "Donut": {
      slug: "donut",
      viewBox: "0 0 24 24",
      body: "<path d=\"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3\" /><circle cx=\"12\" cy=\"12\" r=\"3\" />"
    },
    "DoorClosed": {
      slug: "door-closed",
      viewBox: "0 0 24 24",
      body: "<path d=\"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14\" /><path d=\"M2 20h20\" /><path d=\"M14 12v.01\" />"
    }
  };
} catch {}
Object.assign(__ds_scope, { __ds_default_components_icons_icon_data_12stud1 });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/icon-data.js", error: String((e && e.message) || e) }); }

__ds_scope.__ds_default_components_icons_icon_data_12stud1$1nb03e1 = __ds_scope.__ds_default_components_icons_icon_data_12stud1;

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SHAPES = /<(path|circle|rect|line|polyline|polygon|ellipse)\b/g;

/**
 * Icon — the 24 glyphs of the AnimalOOO icon set (Lucide geometry, drawn as thin strokes).
 * Defaults match the brand file: 1px stroke that stays 1px at any display size, round caps/joins.
 */
function Icon({
  name,
  size = 24,
  strokeWidth = 1,
  scaleStroke = false,
  color,
  style,
  ...rest
}) {
  const d = __ds_scope.__ds_default_components_icons_icon_data_12stud1$1nb03e1[name];
  if (!d) return null;
  const body = scaleStroke ? d.body : d.body.replace(SHAPES, '<$1 vector-effect="non-scaling-stroke"');
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: d.viewBox,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      display: 'block',
      flexShrink: 0,
      color,
      ...style
    }
    // body strings are static Lucide geometry from icon-data.js.
    ,
    dangerouslySetInnerHTML: {
      __html: body
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon, __ds_default_components_icons_Icon_fio49a: Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/logos/BiotageLogoHorizontal.jsx
try { (() => {
// figma node: 1:148 Biotage Logo Horizontal (2 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "property1=" + __venc(p.property1);
function BiotageLogoHorizontal(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 236.004,
      height: 56.001,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 236.004,
      height: 56.001,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 27.853,
    height: 38.683,
    viewBox: "0 0 27.853 38.683",
    fill: "none",
    style: {
      position: "absolute",
      left: 202.315,
      top: 0,
      width: 27.853,
      height: 38.683,
      color: "rgb(246,134,31)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 23.891 24.546 C 18.52 34.831 9.714 40.836 4.202 37.966 C -1.293 35.095 -1.416 24.422 3.937 14.137 C 9.309 3.852 18.132 -2.154 23.645 0.717 C 29.14 3.588 29.281 14.26 23.909 24.546",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 22.340,
    height: 51.761,
    viewBox: "0 0 22.340 51.761",
    fill: "none",
    style: {
      position: "absolute",
      left: 189.32,
      top: 2.39,
      width: 22.34,
      height: 51.761,
      color: "rgb(246,134,31)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 22.34 0 C 22.34 0 -1.119 13.279 6.524 51.761 C 6.524 51.761 -15.878 7.15 22.34 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 36.584,
    height: 42.585,
    viewBox: "0 0 36.584 42.585",
    fill: "none",
    style: {
      position: "absolute",
      left: 199.42,
      top: 13.415,
      width: 36.584,
      height: 42.585,
      color: "rgb(246,134,31)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 33.392 0 C 33.392 0 35.945 26.84 0 42.585 C 0 42.585 49.401 35.417 33.392 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 26.216,
    height: 38.510,
    viewBox: "0 0 26.216 38.510",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 6.824,
      width: 26.216,
      height: 38.51,
      color: "rgb(0,51,102)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.146 26.995 C 19.146 30.442 17.04 33.231 12.13 33.231 L 6.345 33.231 L 6.345 21.047 L 11.966 21.047 C 13.799 21.047 14.578 21.101 15.522 21.375 C 17.641 21.99 19.132 24.274 19.132 26.995 M 26.216 27.611 C 26.216 23.768 24.438 19.419 18.038 17.874 C 22.318 16.643 24.671 13.58 24.671 9.463 C 24.671 6.236 23.221 3.733 20.322 1.887 C 17.929 0.383 15.918 0 10.188 0 L 0 0 L 0 38.51 L 11.187 38.51 C 20.923 38.51 26.216 35.228 26.216 27.597 M 17.915 10.462 C 17.915 11.46 17.587 13.074 16.411 14.305 C 15.193 15.59 14.017 15.754 11.679 15.754 L 6.222 15.754 L 6.222 5.238 L 11.173 5.238 C 13.005 5.238 14.017 5.402 14.797 5.675 C 16.629 6.345 17.915 8.233 17.915 10.462 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.069,
    height: 40.507,
    viewBox: "0 0 8.069 40.507",
    fill: "none",
    style: {
      position: "absolute",
      left: 31.208,
      top: 4.827,
      width: 8.069,
      height: 40.507,
      color: "rgb(0,51,102)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.903 40.507 L 0.903 12.8 L 7.084 11.679 L 7.084 40.507 L 0.903 40.507 Z M 0 4.116 C 0 1.833 1.778 0 4.062 0 C 6.345 0 8.069 1.778 8.069 4.116 C 8.069 6.455 6.236 8.178 3.952 8.178 C 1.668 8.178 0 6.332 0 4.116 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 24.876,
    height: 29.553,
    viewBox: "0 0 24.876 29.553",
    fill: "none",
    style: {
      position: "absolute",
      left: 43.858,
      top: 16.219,
      width: 24.876,
      height: 29.553,
      color: "rgb(0,51,102)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.294 0 C 4.841 0 0 5.798 0 14.811 C 0 23.823 4.786 29.553 12.404 29.553 C 20.021 29.553 24.876 23.932 24.876 14.865 C 24.876 5.798 20.308 0 12.294 0 Z M 12.349 4.622 C 15.905 4.622 18.134 7.016 18.134 14.975 C 18.134 22.045 16.123 24.999 12.513 24.999 C 8.903 24.999 6.783 22.606 6.783 14.428 C 6.783 7.576 8.451 4.636 12.349 4.636",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15.973,
    height: 37.348,
    viewBox: "0 0 15.973 37.348",
    fill: "none",
    style: {
      position: "absolute",
      left: 73.15,
      top: 8.698,
      width: 15.973,
      height: 37.348,
      color: "rgb(0,51,102)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.19 8.479 L 15.918 8.479 L 14.305 12.705 L 9.135 12.705 L 9.135 28.513 C 9.135 32.014 9.915 33.013 12.581 33.013 C 13.416 33.013 14.14 32.849 15.193 32.466 L 15.973 36.131 C 14.14 36.965 12.363 37.348 10.462 37.348 C 5.005 37.348 3.118 34.12 3.118 30.113 L 3.118 12.691 L 0 12.691 L 0 8.465 L 3.118 8.465 C 3.118 6.072 3.118 3.624 3.392 1.504 L 9.682 0 C 9.409 2.284 9.176 5.675 9.176 8.465",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 24.110,
    height: 30.059,
    viewBox: "0 0 24.110 30.059",
    fill: "none",
    style: {
      position: "absolute",
      left: 93.404,
      top: 16.452,
      width: 24.11,
      height: 30.059,
      color: "rgb(0,51,102)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 24.11 26.161 C 21.935 24.657 21.607 23.44 21.662 19.652 L 21.771 11.583 C 21.826 7.412 21.826 5.908 21.32 4.677 C 20.103 1.614 17.149 0 12.746 0 C 8.342 0 5.005 1.162 0.78 3.843 L 3.501 8.246 C 3.501 8.246 7.836 5.019 11.898 5.019 C 15.234 5.019 15.795 6.742 15.795 9.969 L 15.795 11.474 L 13.908 11.474 C 4.896 11.474 0 14.756 0 21.265 C 0 26.161 2.899 29.73 9.354 29.73 C 12.363 29.73 14.811 28.842 17.094 26.271 C 17.764 28.048 19.214 29.389 20.937 30.059 L 24.11 26.161 Z M 15.699 15.631 L 15.59 22.318 C 14.359 24.096 12.472 25.259 10.516 25.259 C 8.069 25.259 6.619 23.59 6.619 20.923 C 6.619 17.368 8.465 15.59 14.578 15.59 C 15.029 15.59 15.699 15.645 15.699 15.645",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 28.445,
    height: 40.001,
    viewBox: "0 0 28.445 40.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 121.425,
      top: 16,
      width: 28.445,
      height: 40.001,
      color: "rgb(0,51,102)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 28.431 3.843 L 25.6 0 C 24.041 1.285 22.318 1.942 20.472 1.942 C 18.188 1.942 15.905 0.492 11.898 0.492 C 5.169 0.492 0.656 4.28 0.656 10.01 C 0.656 14.017 2.831 16.739 7.057 17.97 C 4.048 18.913 1.709 20.021 1.709 22.811 C 1.709 25.6 3.378 27.091 10.954 27.091 C 16.192 27.091 18.749 27.925 18.749 30.989 C 18.749 33.601 16.411 35.392 12.075 35.392 C 8.123 35.392 5.894 33.943 5.894 31.331 C 5.894 30.442 6.332 29.32 6.332 29.32 L 0.547 29.32 C 0.547 29.32 0 30.989 0 32.329 C 0 37.608 5.279 40.001 12.581 40.001 C 19.884 40.001 25.108 36.773 25.108 30.77 C 25.108 24.766 20.267 22.756 15.754 22.756 C 9.135 22.756 8.739 22.647 8.739 21.594 C 8.739 20.705 10.53 19.638 12.527 18.913 C 19.146 18.913 23.207 15.193 23.207 10.284 C 23.207 7.221 21.375 5.333 21.375 5.333 C 21.375 5.333 22.209 5.662 23.549 5.662 C 25.436 5.662 26.886 5.156 28.445 3.829 M 11.843 5.128 C 15.07 5.128 16.684 6.797 16.684 9.969 C 16.684 13.142 15.016 14.756 11.843 14.756 C 8.834 14.756 7.002 13.252 7.002 10.024 C 7.002 6.797 8.725 5.128 11.843 5.128 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 23.549,
    height: 29.553,
    viewBox: "0 0 23.549 29.553",
    fill: "none",
    style: {
      position: "absolute",
      left: 151.552,
      top: 16.506,
      width: 23.549,
      height: 29.553,
      color: "rgb(0,51,102)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 23.549 16.424 L 23.549 15.139 C 23.549 8.575 22.318 5.128 19.87 2.899 C 17.477 0.725 14.92 0 12.13 0 C 8.561 0 5.785 1.176 3.501 3.788 C 1.053 6.578 0 9.86 0 14.811 C 0 23.823 5.005 29.553 12.964 29.553 C 16.752 29.553 20.144 28.322 23.098 25.819 L 20.705 22.086 C 18.585 23.918 16.301 24.862 13.689 24.862 C 8.178 24.862 6.728 20.746 6.728 16.848 L 6.728 16.397 L 23.535 16.397 L 23.549 16.424 Z M 17.204 11.911 L 6.797 11.911 C 6.797 7.344 8.698 4.622 12.144 4.622 C 15.207 4.622 17.204 7.344 17.204 11.911 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.785,
    height: 5.839,
    viewBox: "0 0 5.785 5.839",
    fill: "none",
    style: {
      position: "absolute",
      left: 172.215,
      top: 10.161,
      width: 5.785,
      height: 5.839,
      color: "rgb(0,51,102)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.352 2.817 L 2.735 2.817 C 3.173 2.817 3.528 2.667 3.528 2.256 C 3.528 1.969 3.323 1.682 2.735 1.682 C 2.571 1.682 2.448 1.696 2.352 1.709 L 2.352 2.817 Z M 2.352 4.609 L 1.833 4.609 L 1.833 1.354 C 2.106 1.313 2.366 1.272 2.762 1.272 C 3.255 1.272 3.583 1.368 3.774 1.518 C 3.98 1.655 4.075 1.874 4.075 2.188 C 4.075 2.612 3.788 2.872 3.446 2.981 L 3.446 3.009 C 3.733 3.063 3.925 3.323 3.993 3.802 C 4.075 4.308 4.144 4.499 4.198 4.609 L 3.651 4.609 C 3.569 4.513 3.501 4.212 3.433 3.788 C 3.35 3.364 3.145 3.214 2.735 3.214 L 2.366 3.214 L 2.366 4.609 L 2.352 4.609 Z M 2.899 0.451 C 1.614 0.451 0.561 1.559 0.561 2.913 C 0.561 4.267 1.614 5.388 2.913 5.388 C 4.212 5.402 5.251 4.294 5.251 2.927 C 5.251 1.559 4.212 0.451 2.913 0.451 L 2.899 0.451 Z M 2.913 0 C 4.499 0 5.785 1.299 5.785 2.913 C 5.785 4.527 4.513 5.839 2.899 5.839 C 1.285 5.839 0 4.554 0 2.913 C 0 1.272 1.299 0 2.899 0 L 2.913 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 216,
      height: 56,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 215.997,
      height: 56.001,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.916,
    height: 22.104,
    viewBox: "0 0 15.916 22.104",
    fill: "none",
    style: {
      position: "absolute",
      left: 196.746,
      top: 0,
      width: 15.916,
      height: 22.104,
      color: "rgb(246,134,31)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.652 14.026 C 10.583 19.903 5.551 23.335 2.401 21.695 C -0.739 20.054 -0.809 13.956 2.25 8.078 C 5.319 2.201 10.361 -1.231 13.511 0.41 C 16.651 2.05 16.732 8.149 13.662 14.026",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.766,
    height: 29.577,
    viewBox: "0 0 12.766 29.577",
    fill: "none",
    style: {
      position: "absolute",
      left: 189.32,
      top: 1.366,
      width: 12.766,
      height: 29.577,
      color: "rgb(246,134,31)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.766 0 C 12.766 0 -0.639 7.588 3.728 29.577 C 3.728 29.577 -9.073 4.086 12.766 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20.905,
    height: 24.334,
    viewBox: "0 0 20.905 24.334",
    fill: "none",
    style: {
      position: "absolute",
      left: 195.091,
      top: 7.666,
      width: 20.905,
      height: 24.334,
      color: "rgb(246,134,31)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.081 0 C 19.081 0 20.54 15.337 0 24.334 C 0 24.334 28.229 20.238 19.081 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 26.216,
    height: 38.510,
    viewBox: "0 0 26.216 38.510",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 6.824,
      width: 26.216,
      height: 38.51,
      color: "rgb(0,51,102)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.146 26.995 C 19.146 30.442 17.04 33.231 12.13 33.231 L 6.345 33.231 L 6.345 21.047 L 11.966 21.047 C 13.799 21.047 14.578 21.101 15.522 21.375 C 17.641 21.99 19.132 24.274 19.132 26.995 M 26.216 27.611 C 26.216 23.768 24.438 19.419 18.038 17.874 C 22.318 16.643 24.671 13.58 24.671 9.463 C 24.671 6.236 23.221 3.733 20.322 1.887 C 17.929 0.383 15.918 0 10.188 0 L 0 0 L 0 38.51 L 11.187 38.51 C 20.923 38.51 26.216 35.228 26.216 27.597 M 17.915 10.462 C 17.915 11.46 17.587 13.074 16.411 14.305 C 15.193 15.59 14.017 15.754 11.679 15.754 L 6.222 15.754 L 6.222 5.238 L 11.173 5.238 C 13.005 5.238 14.017 5.402 14.797 5.675 C 16.629 6.345 17.915 8.233 17.915 10.462 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.069,
    height: 40.507,
    viewBox: "0 0 8.069 40.507",
    fill: "none",
    style: {
      position: "absolute",
      left: 31.208,
      top: 4.827,
      width: 8.069,
      height: 40.507,
      color: "rgb(0,51,102)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.903 40.507 L 0.903 12.8 L 7.084 11.679 L 7.084 40.507 L 0.903 40.507 Z M 0 4.116 C 0 1.833 1.778 0 4.062 0 C 6.345 0 8.069 1.778 8.069 4.116 C 8.069 6.455 6.236 8.178 3.952 8.178 C 1.668 8.178 0 6.332 0 4.116 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 24.876,
    height: 29.553,
    viewBox: "0 0 24.876 29.553",
    fill: "none",
    style: {
      position: "absolute",
      left: 43.858,
      top: 16.219,
      width: 24.876,
      height: 29.553,
      color: "rgb(0,51,102)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.294 0 C 4.841 0 0 5.798 0 14.811 C 0 23.823 4.786 29.553 12.404 29.553 C 20.021 29.553 24.876 23.932 24.876 14.865 C 24.876 5.798 20.308 0 12.294 0 Z M 12.349 4.622 C 15.905 4.622 18.134 7.016 18.134 14.975 C 18.134 22.045 16.123 24.999 12.513 24.999 C 8.903 24.999 6.783 22.606 6.783 14.428 C 6.783 7.576 8.451 4.636 12.349 4.636",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15.973,
    height: 37.348,
    viewBox: "0 0 15.973 37.348",
    fill: "none",
    style: {
      position: "absolute",
      left: 73.15,
      top: 8.698,
      width: 15.973,
      height: 37.348,
      color: "rgb(0,51,102)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.19 8.479 L 15.918 8.479 L 14.305 12.705 L 9.135 12.705 L 9.135 28.513 C 9.135 32.014 9.915 33.013 12.581 33.013 C 13.416 33.013 14.14 32.849 15.193 32.466 L 15.973 36.131 C 14.14 36.965 12.363 37.348 10.462 37.348 C 5.005 37.348 3.118 34.12 3.118 30.113 L 3.118 12.691 L 0 12.691 L 0 8.465 L 3.118 8.465 C 3.118 6.072 3.118 3.624 3.392 1.504 L 9.682 0 C 9.409 2.284 9.176 5.675 9.176 8.465",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 24.110,
    height: 30.059,
    viewBox: "0 0 24.110 30.059",
    fill: "none",
    style: {
      position: "absolute",
      left: 93.404,
      top: 16.452,
      width: 24.11,
      height: 30.059,
      color: "rgb(0,51,102)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 24.11 26.161 C 21.935 24.657 21.607 23.44 21.662 19.652 L 21.771 11.583 C 21.826 7.412 21.826 5.908 21.32 4.677 C 20.103 1.614 17.149 0 12.746 0 C 8.342 0 5.005 1.162 0.78 3.843 L 3.501 8.246 C 3.501 8.246 7.836 5.019 11.898 5.019 C 15.234 5.019 15.795 6.742 15.795 9.969 L 15.795 11.474 L 13.908 11.474 C 4.896 11.474 0 14.756 0 21.265 C 0 26.161 2.899 29.73 9.354 29.73 C 12.363 29.73 14.811 28.842 17.094 26.271 C 17.764 28.048 19.214 29.389 20.937 30.059 L 24.11 26.161 Z M 15.699 15.631 L 15.59 22.318 C 14.359 24.096 12.472 25.259 10.516 25.259 C 8.069 25.259 6.619 23.59 6.619 20.923 C 6.619 17.368 8.465 15.59 14.578 15.59 C 15.029 15.59 15.699 15.645 15.699 15.645",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 28.445,
    height: 40.001,
    viewBox: "0 0 28.445 40.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 121.425,
      top: 16,
      width: 28.445,
      height: 40.001,
      color: "rgb(0,51,102)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 28.431 3.843 L 25.6 0 C 24.041 1.285 22.318 1.942 20.472 1.942 C 18.188 1.942 15.905 0.492 11.898 0.492 C 5.169 0.492 0.656 4.28 0.656 10.01 C 0.656 14.017 2.831 16.739 7.057 17.97 C 4.048 18.913 1.709 20.021 1.709 22.811 C 1.709 25.6 3.378 27.091 10.954 27.091 C 16.192 27.091 18.749 27.925 18.749 30.989 C 18.749 33.601 16.411 35.392 12.075 35.392 C 8.123 35.392 5.894 33.943 5.894 31.331 C 5.894 30.442 6.332 29.32 6.332 29.32 L 0.547 29.32 C 0.547 29.32 0 30.989 0 32.329 C 0 37.608 5.279 40.001 12.581 40.001 C 19.884 40.001 25.108 36.773 25.108 30.77 C 25.108 24.766 20.267 22.756 15.754 22.756 C 9.135 22.756 8.739 22.647 8.739 21.594 C 8.739 20.705 10.53 19.638 12.527 18.913 C 19.146 18.913 23.207 15.193 23.207 10.284 C 23.207 7.221 21.375 5.333 21.375 5.333 C 21.375 5.333 22.209 5.662 23.549 5.662 C 25.436 5.662 26.886 5.156 28.445 3.829 M 11.843 5.128 C 15.07 5.128 16.684 6.797 16.684 9.969 C 16.684 13.142 15.016 14.756 11.843 14.756 C 8.834 14.756 7.002 13.252 7.002 10.024 C 7.002 6.797 8.725 5.128 11.843 5.128 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 23.549,
    height: 29.553,
    viewBox: "0 0 23.549 29.553",
    fill: "none",
    style: {
      position: "absolute",
      left: 151.552,
      top: 16.506,
      width: 23.549,
      height: 29.553,
      color: "rgb(0,51,102)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 23.549 16.424 L 23.549 15.139 C 23.549 8.575 22.318 5.128 19.87 2.899 C 17.477 0.725 14.92 0 12.13 0 C 8.561 0 5.785 1.176 3.501 3.788 C 1.053 6.578 0 9.86 0 14.811 C 0 23.823 5.005 29.553 12.964 29.553 C 16.752 29.553 20.144 28.322 23.098 25.819 L 20.705 22.086 C 18.585 23.918 16.301 24.862 13.689 24.862 C 8.178 24.862 6.728 20.746 6.728 16.848 L 6.728 16.397 L 23.535 16.397 L 23.549 16.424 Z M 17.204 11.911 L 6.797 11.911 C 6.797 7.344 8.698 4.622 12.144 4.622 C 15.207 4.622 17.204 7.344 17.204 11.911 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.785,
    height: 5.839,
    viewBox: "0 0 5.785 5.839",
    fill: "none",
    style: {
      position: "absolute",
      left: 172.215,
      top: 10.161,
      width: 5.785,
      height: 5.839,
      color: "rgb(0,51,102)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.352 2.817 L 2.735 2.817 C 3.173 2.817 3.528 2.667 3.528 2.256 C 3.528 1.969 3.323 1.682 2.735 1.682 C 2.571 1.682 2.448 1.696 2.352 1.709 L 2.352 2.817 Z M 2.352 4.609 L 1.833 4.609 L 1.833 1.354 C 2.106 1.313 2.366 1.272 2.762 1.272 C 3.255 1.272 3.583 1.368 3.774 1.518 C 3.98 1.655 4.075 1.874 4.075 2.188 C 4.075 2.612 3.788 2.872 3.446 2.981 L 3.446 3.009 C 3.733 3.063 3.925 3.323 3.993 3.802 C 4.075 4.308 4.144 4.499 4.198 4.609 L 3.651 4.609 C 3.569 4.513 3.501 4.212 3.433 3.788 C 3.35 3.364 3.145 3.214 2.735 3.214 L 2.366 3.214 L 2.366 4.609 L 2.352 4.609 Z M 2.899 0.451 C 1.614 0.451 0.561 1.559 0.561 2.913 C 0.561 4.267 1.614 5.388 2.913 5.388 C 4.212 5.402 5.251 4.294 5.251 2.927 C 5.251 1.559 4.212 0.451 2.913 0.451 L 2.899 0.451 Z M 2.913 0 C 4.499 0 5.785 1.299 5.785 2.913 C 5.785 4.527 4.513 5.839 2.899 5.839 C 1.285 5.839 0 4.554 0 2.913 C 0 1.272 1.299 0 2.899 0 L 2.913 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
    // figma: Property 1=Alt. 1
    "property1=alt. 1": __body1
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { BiotageLogoHorizontal, __ds_default_components_logos_BiotageLogoHorizontal_91ypxf: BiotageLogoHorizontal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/logos/BiotageLogoHorizontal.jsx", error: String((e && e.message) || e) }); }

// slides/SlidePage.jsx
try { (() => {
/** Resolve a design-system asset path. Pages one level below the DS root use the default "../". */
const asset = (p, base) => (base ?? (typeof window !== 'undefined' && window.OOO_ASSET_BASE) ?? '../') + p;

/** 1920×1080 AnimalOOO guideline page: 64px padding, Header on top. */
function SlidePage({
  background = 'var(--surface-page)',
  gap = 64,
  justify = 'flex-start',
  breadcrumb,
  inverse = false,
  header = true,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 1920,
      height: 1080,
      overflow: 'hidden',
      background,
      display: 'flex',
      flexDirection: 'column',
      gap,
      padding: 64,
      justifyContent: justify,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-primary)',
      ...style
    }
  }, header ? /*#__PURE__*/React.createElement(__ds_scope.Header, {
    breadcrumb: breadcrumb,
    inverse: inverse,
    style: {
      flexShrink: 0
    }
  }) : null, children);
}

/** Flat, square artwork tile used on every logo / icon / imagery page. */
function Tile({
  background = 'var(--surface-tile)',
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: '1 1 0',
      minWidth: 0,
      alignSelf: 'stretch',
      background,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      ...style
    }
  }, children);
}

/** 18×18 numbered bullet from the typography pages. */
function Bullet({
  n
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 32,
      background: 'var(--ooo-ink)',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 0.9,
      letterSpacing: '-0.02em',
      color: 'var(--ooo-snow)'
    }
  }, n));
}
const pageTitle = {
  fontWeight: 600,
  fontSize: 40,
  lineHeight: 1.2000000476837158,
  letterSpacing: '-0.01em',
  margin: 0
};
const groupTitle = {
  fontWeight: 600,
  fontSize: 24,
  lineHeight: 1.2000000476837158,
  letterSpacing: '-0.01em',
  margin: 0,
  whiteSpace: 'nowrap'
};
const note = {
  fontWeight: 400,
  fontSize: 16,
  lineHeight: 1,
  letterSpacing: '-0.02em',
  margin: 0
};

// Lowercase aliases keep these helpers off the design-system namespace (they are slide internals).
Object.assign(__ds_scope, { asset, pageTitle, groupTitle, note, slidePage: SlidePage, tile: Tile, bullet: Bullet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/SlidePage.jsx", error: String((e && e.message) || e) }); }

// slides/ColorSlides.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const lab = {
  fontWeight: 700,
  fontSize: 16,
  lineHeight: 1,
  letterSpacing: '-0.02em',
  whiteSpace: 'nowrap'
};
function Swatch({
  color,
  labels,
  height
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      flex: height ? '1 1 0' : 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: color,
      ...(height ? {
        height
      } : {
        flex: 1
      })
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      height: 16
    }
  }, labels.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: lab
  }, l))));
}

/** Branding colours: OOO Cerise + OOO Brown with dark / light steps (frame "Visual Identity – 48"). */
function BrandColoursSlide() {
  const col = (big, small) => /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Swatch, big), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 313,
      display: 'flex',
      gap: 24
    }
  }, small.map((s, i) => /*#__PURE__*/React.createElement(Swatch, _extends({
    key: i
  }, s, {
    height: 289
  })))));
  return /*#__PURE__*/React.createElement(__ds_scope.slidePage, {
    breadcrumb: "Animal.OOO / Visual Identity / Color palette"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 840,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: __ds_scope.pageTitle
  }, "Branding colours"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      gap: 24
    }
  }, col({
    color: 'var(--ooo-cerise)',
    labels: ['OOO Cerice', 'HEX  #CD3A85', 'RGB  205  58  133', 'CMYK  17  88  9  0']
  }, [{
    color: 'var(--ooo-cerise-dark)',
    labels: ['OOO Cerice', 'HEX  #A82F6D', 'RGB  168  47  109']
  }, {
    color: 'var(--ooo-cerise-light)',
    labels: ['OOO Cerice', 'HEX  #D1669C', 'RGB  209  102  156']
  }]), col({
    color: 'var(--ooo-brown)',
    labels: ['OOO Brown', 'HEX  #95796B', 'RGB  149  121  107']
  }, [{
    color: 'var(--ooo-brown-dark)',
    labels: ['OOO Brown', 'HEX  #7E5E53', 'RGB  126  94  83']
  }, {
    color: 'var(--ooo-brown-light)',
    labels: ['OOO Brown', 'HEX  #C6ADA4', 'RGB  198  173  164']
  }]))));
}
function Chip({
  bg,
  name,
  hex,
  light = false,
  outline
}) {
  const ink = light ? 'var(--ooo-white)' : 'var(--text-primary)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 0',
      minWidth: 0,
      alignSelf: 'stretch',
      background: bg,
      boxShadow: outline ? `inset 0 0 0 1px ${outline}` : undefined,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, name ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 24,
      lineHeight: 1,
      color: ink,
      whiteSpace: 'pre-line'
    }
  }, name) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1,
      color: ink,
      whiteSpace: 'nowrap'
    }
  }, hex));
}
const row = {
  flex: 1,
  display: 'flex',
  gap: 48
};

/** Working, helping, UI, background and text colours (frame "Visual Identity – Color - Categories"). */
function ColourCategoriesSlide() {
  return /*#__PURE__*/React.createElement(__ds_scope.slidePage, {
    breadcrumb: "Animal.OOO / Visual Identity / Color palette"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 365,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: __ds_scope.groupTitle
  }, "Working colours"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement(Chip, {
    light: true,
    bg: "var(--ooo-mk)",
    name: 'OOO\nMK',
    hex: "#DF8556"
  }), /*#__PURE__*/React.createElement(Chip, {
    light: true,
    bg: "var(--ooo-f)",
    name: 'OOO\nF',
    hex: "#58A270"
  }), /*#__PURE__*/React.createElement(Chip, {
    light: true,
    bg: "var(--ooo-founders)",
    name: 'OOO\nFounders',
    hex: "#A279C4"
  }), /*#__PURE__*/React.createElement(Chip, {
    light: true,
    bg: "var(--ooo-offspring)",
    name: 'OOO\nOffspring',
    hex: "#F5C168"
  }), /*#__PURE__*/React.createElement(Chip, {
    light: true,
    bg: "var(--ooo-ne)",
    name: 'OOO\nNe',
    hex: "#2694AE"
  }), /*#__PURE__*/React.createElement(Chip, {
    light: true,
    bg: "var(--ooo-age)",
    name: 'OOO\nAge',
    hex: "#95796B"
  })), /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement(Chip, {
    bg: "var(--ooo-mk-mid)",
    hex: "#EEA886"
  }), /*#__PURE__*/React.createElement(Chip, {
    bg: "var(--ooo-f-mid)",
    hex: "#ACCFB8"
  }), /*#__PURE__*/React.createElement(Chip, {
    bg: "var(--ooo-founders-mid)",
    hex: "#D0BDE0"
  }), /*#__PURE__*/React.createElement(Chip, {
    bg: "var(--ooo-offspring-mid)",
    hex: "#FFDDA6"
  }), /*#__PURE__*/React.createElement(Chip, {
    bg: "var(--ooo-nc)",
    name: 'OOO\nNC',
    hex: "#A0D3DF"
  }), /*#__PURE__*/React.createElement(Chip, {
    bg: "var(--ooo-age-mid)",
    hex: "#C6ADA4"
  })), /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement(Chip, {
    bg: "var(--ooo-mk-light)",
    hex: "#FDDBC8"
  }), /*#__PURE__*/React.createElement(Chip, {
    bg: "var(--ooo-f-light)",
    hex: "#DEECE2"
  }), /*#__PURE__*/React.createElement(Chip, {
    bg: "var(--ooo-founders-light)",
    hex: "#ECE4F3"
  }), /*#__PURE__*/React.createElement(Chip, {
    bg: "var(--ooo-offspring-light)",
    hex: "#FFEBC9"
  }), /*#__PURE__*/React.createElement(Chip, {
    bg: "var(--ooo-ne-light)",
    hex: "#D0EAF0"
  }), /*#__PURE__*/React.createElement(Chip, {
    bg: "var(--ooo-age-light)",
    hex: "#F1E7E3"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: __ds_scope.groupTitle
  }, "Helping colours"), /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement(Chip, {
    bg: "var(--ooo-hane)",
    name: "Preline: Sky 200",
    hex: "#BAE6FD"
  }), /*#__PURE__*/React.createElement(Chip, {
    bg: "var(--ooo-hona)",
    name: "Preline: Pink 200",
    hex: "#FBCFE8"
  }), /*#__PURE__*/React.createElement(Chip, {
    bg: "var(--ooo-founders-mid)",
    name: 'OOO\nFounder',
    hex: "#D0BDE0"
  }), /*#__PURE__*/React.createElement(Chip, {
    bg: "var(--ooo-not-bred-yet)",
    name: 'OOO\nNot bred yet',
    hex: "#CEE3B9"
  }), /*#__PURE__*/React.createElement(Chip, {
    bg: "var(--ooo-extinct)",
    name: 'OOO\nExtinct',
    hex: "#E6DEDE"
  }), /*#__PURE__*/React.createElement(Chip, {
    bg: "var(--ooo-risk)",
    name: 'OOO\nRisk',
    hex: "#CC3F5E"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 213,
      display: 'flex',
      gap: 48,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 872,
      flexShrink: 0,
      alignSelf: 'stretch',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: __ds_scope.groupTitle
  }, "UI colours"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    bg: "var(--ooo-ui-1)",
    hex: "#D0AFA3"
  }), /*#__PURE__*/React.createElement(Chip, {
    bg: "var(--ooo-ui-2)",
    hex: "#E5CDC5"
  }), /*#__PURE__*/React.createElement(Chip, {
    bg: "var(--ooo-ui-3)",
    hex: "#F5E3DE"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      alignSelf: 'stretch',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: __ds_scope.groupTitle
  }, "Bg colour"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    bg: "var(--ooo-paper)",
    outline: "var(--border-swatch)",
    hex: "#FBF8F7"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      alignSelf: 'stretch',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: __ds_scope.groupTitle
  }, "Text colours"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    bg: "var(--ooo-snow)",
    outline: "var(--border-swatch-ink)",
    hex: "#FFFCFC"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 160,
      display: 'flex',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    light: true,
    bg: "var(--ooo-brown-dark)",
    hex: "#7E5E53"
  }), /*#__PURE__*/React.createElement(Chip, {
    light: true,
    bg: "var(--ooo-ink)",
    hex: "#141414"
  })))));
}

// Registered on window.AnimalOOOSlides (not the DS namespace): page recreations, not primitives.
const colorSlides = {
  BrandColoursSlide,
  ColourCategoriesSlide
};
if (typeof window !== 'undefined') window.AnimalOOOSlides = Object.assign(window.AnimalOOOSlides || {}, colorSlides);
Object.assign(__ds_scope, { colorSlides });
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/ColorSlides.jsx", error: String((e && e.message) || e) }); }

// slides/IconSlides.jsx
try { (() => {
const ICON_ROWS = [['ActivitySquare', 'Activity', 'AirVent', 'Airplay', 'AlarmCheck', 'AlarmClockOff', 'AlarmClock', 'Accessibility'], ['CircleSlash', 'Circle', 'CircuitBoard', 'Citrus', 'Clapperboard', 'ClipboardCheck', 'ClipboardCopy', 'ClipboardEdit'], ['DivideSquare', 'Divide', 'DnaOff', 'Dna', 'Dog', 'DollarSign', 'Donut', 'DoorClosed']];

/** Iconography — 3×8 white tiles, 64px thin-stroke icons (frame "Visual Identity – 43"). */
function IconGridSlide({
  color = 'var(--ooo-black)'
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.slidePage, {
    breadcrumb: "Animal.OOO / Visual Identity / Iconography"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 48
    }
  }, ICON_ROWS.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: 'flex',
      gap: 48
    }
  }, r.map(n => /*#__PURE__*/React.createElement(__ds_scope.tile, {
    key: n
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: n,
    size: 64,
    color: color
  })))))), /*#__PURE__*/React.createElement("p", {
    style: {
      ...__ds_scope.note,
      whiteSpace: 'nowrap'
    }
  }, "Icons are in Animal.ooo - Preline design system"));
}
const ANIMALS = [['rabbit', 28.09], ['cat', 57.103], ['dog', 85.445], ['horse', 180.139], ['pheasant', 70.423], ['parrot', 53.302], ['deer', 102.078], ['fish', 43.614], ['chameleon', 42.482], ['hen', 37.428], ['sheep', 118.673], ['lamb', 49.688], ['cow', 170.271], ['gorilla', 127.427], ['tiger', 167.115]];
const TONES = {
  cerise: {
    tile: 'var(--surface-tile)',
    label: 'Animal icons - Cerice'
  },
  white: {
    tile: 'var(--surface-brand-alt)',
    label: 'Animal icons - White'
  },
  black: {
    tile: 'var(--surface-tile)',
    label: 'Animal icons - Black'
  }
};

/** Animal illustrations at relative scale, 3×5 tiles (frames 72 cerise, 73 white on brown, 77 black). */
function AnimalIconsSlide({
  tone = 'cerise',
  assetBase
}) {
  const t = TONES[tone] ?? TONES.cerise;
  return /*#__PURE__*/React.createElement(__ds_scope.slidePage, {
    breadcrumb: "Animal.OOO / Visual Identity / Iconography"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 48
    }
  }, [0, 5, 10].map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      flex: 1,
      display: 'flex',
      gap: 48
    }
  }, ANIMALS.slice(s, s + 5).map(([n, w]) => /*#__PURE__*/React.createElement(__ds_scope.tile, {
    key: n,
    background: t.tile
  }, /*#__PURE__*/React.createElement("img", {
    src: __ds_scope.asset(`assets/illustrations/animals/${n}-${tone}.svg`, assetBase),
    alt: n,
    style: {
      width: w,
      display: 'block'
    }
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 207,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: __ds_scope.note
  }, t.label), /*#__PURE__*/React.createElement("p", {
    style: __ds_scope.note
  }, "Relative scale to each other")));
}

// Registered on window.AnimalOOOSlides (not the DS namespace): page recreations, not primitives.
const iconSlides = {
  IconGridSlide,
  AnimalIconsSlide
};
if (typeof window !== 'undefined') window.AnimalOOOSlides = Object.assign(window.AnimalOOOSlides || {}, iconSlides);
Object.assign(__ds_scope, { iconSlides });
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/IconSlides.jsx", error: String((e && e.message) || e) }); }

// slides/ImagerySlides.jsx
try { (() => {
const INTRO = 'Diversity and inclusivity are important in the images used for AnimalOOO.\nMake sure to use a variation of species in the images.\n';
const STYLES = {
  quirky: {
    title: 'Style 1 - quirky',
    width: 771,
    text: INTRO + 'The images are warm, have a sense of humor, something unexpected or something quirky.\nThe unexpected could be that the owner has an unexpected or unusual animal, or an animal in an unexpected place.\nIt could be an owner wearing clothes in matching colors with its animal, or an owner looking like its animal.',
    rows: [[{
      src: 'quirky-1'
    }, {
      src: 'quirky-2'
    }, {
      src: 'quirky-3'
    }, {
      src: 'quirky-4'
    }, {
      src: 'quirky-5'
    }]]
  },
  closeups: {
    title: 'Style 2 - extreme closeups',
    width: 557,
    text: INTRO + 'The images are active, fun and cool and they invite you to be part of of AnimalOOO.\nPictures of animals with interesting crops, zoomed in and zoomed out.',
    rows: [[{
      src: 'closeup-1',
      bg: '41.367% 50.001% / 225.420% 136.610% no-repeat'
    }, {
      src: 'closeup-2',
      bg: '73.157% 50% / 301.253% 100% no-repeat'
    }, {
      src: 'closeup-3',
      bg: '0 0 / 1020px 680px no-repeat',
      dark: true
    }, {
      src: 'closeup-4a',
      bg: '0 50% / 990px 100% no-repeat',
      dark: true
    }, {
      src: 'closeup-5',
      bg: '0 50% / 1047px 698px no-repeat',
      dark: true
    }]]
  },
  emotional: {
    title: 'Style 3 - emotional',
    width: 491,
    text: INTRO + 'The images are to show the connection between human and animal.\nImportant with nice lighting.',
    rows: [[{
      src: 'emotional-1'
    }, {
      src: 'emotional-2'
    }, {
      src: 'emotional-3'
    }], [{
      src: 'emotional-4'
    }, {
      src: 'emotional-5'
    }, {
      src: 'emotional-6'
    }]],
    rowHeights: [null, 318]
  },
  natural: {
    title: 'Style 4 - natural',
    width: 750,
    bold: true,
    text: 'Focus on animals shown alone, in their full form, within their own environment. The images should feel authentic and unstaged, capturing the animal as it naturally exists. Use a variety of species and settings (urban and wild). Important with natural, well-balanced lighting. The background should clearly reflect the animal’s habitat (e.g. a dog in a city, a gorilla in its natural environment). Note: No humans in the images. Avoid staged scenes or zoo environments.',
    rows: [[{
      src: 'natural-1'
    }, {
      src: 'natural-2'
    }, {
      src: 'natural-3'
    }], [{
      src: 'natural-4'
    }, {
      src: 'natural-5'
    }, {
      src: 'natural-6'
    }]]
  }
};

/** Imagery style page — title, art-direction copy, photo grid (frames 39 quirky, 40 closeups, 41 emotional, 42 natural). */
function ImageryStyleSlide({
  style = 'quirky',
  assetBase
}) {
  const s = STYLES[style] ?? STYLES.quirky;
  const txt = {
    fontSize: 15,
    lineHeight: 1.1799999475479126,
    letterSpacing: '-0.02em',
    margin: 0
  };
  return /*#__PURE__*/React.createElement(__ds_scope.slidePage, {
    breadcrumb: "Animal.OOO / Visual Identity / Imagery"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: s.bold ? 1100 : s.width,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      ...txt,
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: 'nowrap'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      ...txt,
      fontWeight: s.bold ? 700 : 400,
      whiteSpace: 'pre-line'
    }
  }, s.text)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, s.rows.map((r, i) => {
    const h = s.rowHeights && s.rowHeights[i];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        gap: 48,
        ...(h ? {
          height: h,
          flexShrink: 0
        } : {
          flex: 1,
          minHeight: 0
        })
      }
    }, r.map(t => /*#__PURE__*/React.createElement("div", {
      key: t.src,
      style: {
        flex: '1 1 0',
        minWidth: 0,
        overflow: 'hidden',
        background: `url(${__ds_scope.asset('assets/imagery/' + t.src + '.jpg', assetBase)}) ${t.bg ?? 'center / cover no-repeat'}, ${t.dark ? 'var(--ooo-ink)' : 'var(--surface-tile)'}`
      }
    })));
  })));
}

// Registered on window.AnimalOOOSlides (not the DS namespace): page recreations, not primitives.
const imagerySlides = {
  ImageryStyleSlide
};
if (typeof window !== 'undefined') window.AnimalOOOSlides = Object.assign(window.AnimalOOOSlides || {}, imagerySlides);
Object.assign(__ds_scope, { imagerySlides });
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/ImagerySlides.jsx", error: String((e && e.message) || e) }); }

// slides/LogoSlides.jsx
try { (() => {
const MARKS = {
  animalooo: {
    file: 'animalooo-logo',
    w: 509
  },
  breedingooo: {
    file: 'breedingooo-logo',
    w: 616
  },
  ooo: {
    file: 'ooo-mark',
    w: 223.327,
    even: true
  },
  'ooo-vertical': {
    file: 'ooo-mark-vertical',
    w: 67.6,
    even: true
  },
  'with-animals': {
    file: 'animalooo-logo-with-animals',
    w: 557
  }
};

/** Single large cerise wordmark on a white tile (frame "Visual Identity – 50"). */
function LogoHeroSlide({
  assetBase
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.slidePage, {
    breadcrumb: "Animal.OOO / Visual Identity / Logo"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.tile, null, /*#__PURE__*/React.createElement("img", {
    src: __ds_scope.asset('assets/logos/animalooo-logo-cerise.svg', assetBase),
    alt: "AnimalOOO",
    style: {
      width: 930,
      display: 'block'
    }
  }))));
}

/** Four-up colourway page: cerise + black on white, white on cerise + brown (frames 65, 66, 67, 68, 76). */
function LogoColorwaysSlide({
  mark = 'animalooo',
  assetBase
}) {
  const m = MARKS[mark] ?? MARKS.animalooo;
  const img = c => /*#__PURE__*/React.createElement("img", {
    src: __ds_scope.asset(`assets/logos/${m.file}-${c}.svg`, assetBase),
    alt: "",
    style: {
      width: m.w,
      display: 'block'
    }
  });
  const col = {
    display: 'flex',
    flexDirection: 'column',
    gap: 48,
    alignSelf: 'stretch'
  };
  return /*#__PURE__*/React.createElement(__ds_scope.slidePage, {
    breadcrumb: "Animal.OOO / Visual Identity / Logo"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...col,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.tile, null, img('cerise')), /*#__PURE__*/React.createElement(__ds_scope.tile, null, img('black'))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...col,
      ...(m.even ? {
        flex: 1
      } : {
        width: 872,
        flexShrink: 0
      })
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.tile, {
    background: "var(--surface-brand)"
  }, img('white')), /*#__PURE__*/React.createElement(__ds_scope.tile, {
    background: "var(--surface-brand-alt)"
  }, img('white')))));
}

/** Favicon page: 512px favicon + browser mockup (frame "Visual Identity – 64"). */
function FaviconSlide({
  assetBase
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.slidePage, {
    breadcrumb: "Animal.OOO / Visual Identity / Logo"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: __ds_scope.pageTitle
  }, "Favicon"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: `url(${__ds_scope.asset('assets/logos/favicon-512.png', assetBase)}) center / cover no-repeat`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 872,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: 490,
      background: `url(${__ds_scope.asset('assets/imagery/favicon-mockup.jpg', assetBase)}) center / cover no-repeat`
    }
  })))));
}

// Registered on window.AnimalOOOSlides (not the DS namespace): page recreations, not primitives.
const logoSlides = {
  LogoHeroSlide,
  LogoColorwaysSlide,
  FaviconSlide
};
if (typeof window !== 'undefined') window.AnimalOOOSlides = Object.assign(window.AnimalOOOSlides || {}, logoSlides);
Object.assign(__ds_scope, { logoSlides });
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/LogoSlides.jsx", error: String((e && e.message) || e) }); }

// slides/OpeningSlides.jsx
try { (() => {
/** Cover — cerise page, inverse Header, Inclusive Sans title, credit Footer (frame "Visual Identity – 37"). */
function CoverSlide({
  title = 'AnimalOOO',
  subtitle = 'Visual Identity v 3.0 (10 aug)',
  credit
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.slidePage, {
    background: "var(--surface-brand)",
    inverse: true,
    gap: 0,
    justify: "space-between",
    breadcrumb: "AnimalOOO / Visual Identity"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-cover)',
      fontWeight: 500,
      color: 'var(--text-on-brand)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 160,
      lineHeight: 1.1
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 72,
      lineHeight: 1.2
    }
  }, subtitle)), /*#__PURE__*/React.createElement(__ds_scope.Footer, {
    inverse: true,
    text: credit
  }));
}
const CONTENTS = ['Logo', 'Colors & Gradient', 'Typography', 'Icons', 'Imagery'];

/** Contents — cerise numbers + Semibold items at 72px / 150% (frame "Visual Identity – 38"). */
function ContentsSlide({
  items = CONTENTS
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.slidePage, {
    gap: 175
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 48,
      alignItems: 'flex-start',
      fontSize: 72,
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500,
      color: 'var(--text-accent)'
    }
  }, items.map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, String(i + 1).padStart(2, '0')))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, t)))));
}

/** Section divider — "01  Logo": 80px Regular cerise number + 80px Bold title (frames 53–57). */
function SectionSlide({
  number = '01',
  title = 'Logo',
  breadcrumb
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.slidePage, {
    gap: 175,
    breadcrumb: breadcrumb
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 80,
      display: 'flex',
      alignItems: 'center',
      gap: 48,
      fontSize: 80,
      lineHeight: 1,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: 'var(--text-accent)'
    }
  }, number), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, title)));
}

// Registered on window.AnimalOOOSlides (not the DS namespace): page recreations, not primitives.
const openingSlides = {
  CoverSlide,
  ContentsSlide,
  SectionSlide
};
if (typeof window !== 'undefined') window.AnimalOOOSlides = Object.assign(window.AnimalOOOSlides || {}, openingSlides);
Object.assign(__ds_scope, { openingSlides });
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/OpeningSlides.jsx", error: String((e && e.message) || e) }); }

// slides/TypeSlides.jsx
try { (() => {
const TYPEFACE_COPY = "Plus Jakarta Sans is a fresh take on geometric sans serif styles, designed by Gumpita Rahayu from Tokotype. The fonts were originally commissioned by 6616 Studio for Jakarta Provincial Government program's +Jakarta City of Collaboration identity in 2020. \nTaking inspiration in Neuzeit Grotesk, Futura, and 1930s grotesque sans serifs with almost monolinear contrast and pointy curves, the fonts consist of modern and clean cut forms, the x-height dimension slightly taller to provide clear spaces between caps and x-height, and also equipped with open counters and balanced spaces to preserve the legibility at a large range of sizes.";

/** Typeface page — name, history, glyph specimen (frame "Visual Identity – 46"). */
function TypefaceSlide() {
  const wide = {
    lineHeight: 1.4500000476837158,
    letterSpacing: '0.03em',
    margin: 0
  };
  return /*#__PURE__*/React.createElement(__ds_scope.slidePage, {
    breadcrumb: "Animal.OOO / Visual Identity / Typography"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      gap: 64,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 588,
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...wide,
      width: 458,
      fontWeight: 600,
      fontSize: 40
    }
  }, "Plus Jakarta Sans"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...wide,
      width: 458,
      fontWeight: 400,
      fontSize: 22,
      whiteSpace: 'pre-line'
    }
  }, TYPEFACE_COPY)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 72,
      lineHeight: 1.25,
      letterSpacing: '0.03em',
      overflowWrap: 'anywhere'
    }
  }, "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtVvWwXxYyZz\xC5\xE5\xC4\xE4\xD6\xF6 0123456789 #\u03A9/\xA3\u2022&*?"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wide,
      fontWeight: 400,
      fontSize: 22
    }
  }, "Plus Jakarta Sans Semibold"))));
}
const SAMPLES = [{
  text: 'Lorem ipsum ',
  s: {
    fontWeight: 700,
    fontSize: 96,
    lineHeight: 0.9,
    letterSpacing: '-0.01em'
  }
}, {
  text: 'Lorem ipsum dolor sit amet consecteteur',
  s: {
    fontWeight: 600,
    fontSize: 56,
    lineHeight: 1,
    letterSpacing: '-0.01em'
  }
}, {
  text: 'Lorem ipsum dolor sit amet consectetur. Turpis eget volutpat sed ipsum. Maecenas bibendum vitae lorem dignissim et condimentum.',
  s: {
    fontWeight: 500,
    fontSize: 24,
    lineHeight: 1.5
  }
}, {
  text: 'Lorem ipsum dolor sit amet consectetur. Ultrices interdum curabitur sem elit in morbi amet placerat. Nulla lobortis nisl mollis scelerisque nulla eget. Arcu convallis mattis egestas diam. Nulla feugiat sed at rhoncus ac orci senectus tortor imperdiet. Bibendum urna at nec mi donec et senectus arcu. Faucibus cursus nisl fermentum in. Sed tortor interdum diam vulputate amet dolor.',
  s: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 1.5
  }
}, {
  text: 'Lorem ipsum dolor sit amet consectetur',
  s: {
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 1.2
  }
}];
const SPECS = [['Display', 'Jakarta Bold\nLine height 90%\nLetter spacing -1%'], ['Headline', 'Jakarta Semibold\nLine height 100%\nLetter spacing -1%'], ['Subheader', 'Jakarta Semibold\nLine height 150%\nLetter spacing 0%'], ['Body text', 'Jakarta Medium\nLine height 150%\nLetter spacing 0%'], ['Label', 'Jakarta Regular\nLine height 120%\nLetter spacing 0%']];

/** Typographic hierarchy — samples panel + spec legend (frame "Visual Identity – 10.2"). */
function TypeHierarchySlide() {
  return /*#__PURE__*/React.createElement(__ds_scope.slidePage, {
    breadcrumb: "Animal.OOO / Visual Identity / Typography"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 480,
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: __ds_scope.pageTitle
  }, "Hierarchy"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 400,
      fontSize: 24,
      lineHeight: 1.5
    }
  }, "To maintain consistency, the use of typography needs to follow some hierarchy and colour guidelines.")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5
    }
  }, "Plus Jakarta Sans")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--surface-panel)',
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      padding: '48px 96px',
      justifyContent: 'center',
      boxSizing: 'border-box'
    }
  }, SAMPLES.map((x, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.bullet, {
    n: i + 1
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      ...x.s
    }
  }, x.text)))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 320,
      flexShrink: 0,
      background: 'var(--surface-panel)',
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      padding: 24,
      boxSizing: 'border-box'
    }
  }, SPECS.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      height: 22
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.bullet, {
    n: i + 1
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.2,
      letterSpacing: '-0.01em'
    }
  }, t)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      whiteSpace: 'pre-line'
    }
  }, d))))));
}
const QUOTE = 'AnimalOOO™ Med BreedingOOO blir genetisk variation ett aktivt och mätbart styrmedel i avelsarbetet – inte något man hoppas ska räcka till i efterhand.';
const sample = {
  fontFamily: 'Interstate, var(--font-sans)',
  fontWeight: 400,
  fontSize: 32,
  letterSpacing: '-0.01em',
  color: '#003366',
  width: 623,
  margin: 0
};

/** Typography in use — cow illustration on cerise + sample settings (frame "Visual Identity – 74"). */
function TypeSampleSlide({
  assetBase
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.slidePage, {
    breadcrumb: "Animal.OOO / Visual Identity / Typography"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      gap: 64,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--surface-brand)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: __ds_scope.asset('assets/illustrations/animals/cow-white.svg', assetBase),
    alt: "",
    style: {
      width: 558.884,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      padding: '96px 0',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box'
    }
  }, [QUOTE, '0123456789', 'Plus Jakarta Sans, Semibold & Medium'].map((t, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      ...sample,
      lineHeight: 1.2999999523162842
    }
  }, t)))));
}

/** Statement card — illustration + quote on brown (frame "Visual Identity – 75"). */
function TypeQuoteSlide({
  quote = QUOTE,
  assetBase
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.slidePage, {
    breadcrumb: "Animal.OOO / Visual Identity / Typography"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 840,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--surface-brand-alt)',
      display: 'flex',
      flexDirection: 'column',
      gap: 60,
      padding: '0 100px',
      justifyContent: 'center',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: __ds_scope.asset('assets/illustrations/animals/cow-white.svg', assetBase),
    alt: "",
    style: {
      width: 265.064,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      ...sample,
      lineHeight: 1.440000057220459
    }
  }, quote), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 695,
      height: 62
    }
  }))));
}

// Registered on window.AnimalOOOSlides (not the DS namespace): page recreations, not primitives.
const typeSlides = {
  TypefaceSlide,
  TypeHierarchySlide,
  TypeSampleSlide,
  TypeQuoteSlide
};
if (typeof window !== 'undefined') window.AnimalOOOSlides = Object.assign(window.AnimalOOOSlides || {}, typeSlides);
Object.assign(__ds_scope, { typeSlides });
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/TypeSlides.jsx", error: String((e && e.message) || e) }); }

if (__ds_scope.__ds_default_components_icons_icon_data_12stud1$1nb03e1 === undefined) __ds_scope.__ds_default_components_icons_icon_data_12stud1$1nb03e1 = __ds_scope.__ds_default_components_icons_icon_data_12stud1;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.BiotageLogoHorizontal = __ds_scope.BiotageLogoHorizontal;

})();
