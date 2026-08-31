# Design System Specification & Token Architecture

Extracted and synthesized from [UI Elements.png](file:///d:/Code/Projects/bftv/public/UI%20Elements.png) and [ui-elements-recreation.html](file:///d:/Code/Projects/bftv/public/ui-elements-recreation.html).

---

## 1. Color System & Tokens

### Neutrals
| Token Name | CSS Variable | Hex | Usage |
| :--- | :--- | :--- | :--- |
| `neutral-900` / `s1` | `--color-neutral-900` | `#333333` | Primary headings, active text, dark checkboxes |
| `neutral-700` / `s2` | `--color-neutral-700` | `#4B4B4B` | Body copy, secondary titles, labels |
| `neutral-600` | `--color-neutral-600` | `#505050` | Copy text, plan details, coupon text |
| `neutral-500` | `--color-neutral-500` | `#777777` | State labels, progress captions, step text |
| `neutral-400` / `s3` | `--color-neutral-400` | `#BCBCBC` | Muted text, disabled buttons, icons |
| `neutral-300` | `--color-neutral-300` | `#CFCFCF` | Default input borders, card outlines |
| `neutral-200` | `--color-neutral-200` | `#E8E8E8` | Progress bar background track |
| `neutral-100` | `--color-neutral-100` | `#F8FAFC` | App backgrounds, light surfaces |
| `neutral-white` | `--color-white` | `#FFFFFF` | Input background, card background |

### Brand Purples & Violets
| Token Name | CSS Variable | Hex / Gradient | Usage |
| :--- | :--- | :--- | :--- |
| `brand-purple-deep` | `--color-brand-purple-deep` | `#5959E7` | App Store card banner background |
| `brand-purple-primary` / `s4` | `--color-brand-purple-primary` | `#514CFF` / `#5A59E8` | Focused input border, coupon active state |
| `brand-purple-gradient` | `--color-brand-purple-gradient` | `linear-gradient(90deg, #9693EF, #5B58DF)` | Primary purple CTA button ("Continue") |
| `brand-purple-light` / `s5` | `--color-brand-purple-light` | `#7C78FF` / `#8988F7` | Progress bar active fill, filled border |
| `brand-purple-swatch` / `large1` | `--color-brand-purple-large` | `linear-gradient(135deg, #7778E8, #7779E8)` | Brand hero swatch |

### Success & Action Greens
| Token Name | CSS Variable | Hex / Gradient | Usage |
| :--- | :--- | :--- | :--- |
| `brand-green-gradient` | `--color-brand-green-gradient` | `linear-gradient(90deg, #52D878, #35B85B)` | Primary green CTA button ("Start Trial!") |
| `brand-green-solid` / `large2` | `--color-brand-green-solid` | `#42C465` | Big swatch, active brand green |
| `brand-green-card` | `--color-brand-green-card` | `#3CC48A` | Yearly plan selected border & shadow |
| `brand-green-radio` | `--color-brand-green-radio` | `#4ACB9A` | Plan radio selected fill & checkmark |
| `brand-green-valid` | `--color-brand-green-valid` | `#28B867` | Valid coupon input border, checkmark icon, badge |
| `brand-green-light` | `--color-brand-green-light` | `#F0FDF4` | Selected plan background tint |

### Error & Alert Reds
| Token Name | CSS Variable | Hex | Usage |
| :--- | :--- | :--- | :--- |
| `brand-red-error` | `--color-brand-red-error` | `#FF3E42` | Input error border |
| `brand-red-retry` | `--color-brand-red-retry` | `#FF4D4D` | "Try again, something went wrong" warning |
| `brand-red-coupon` | `--color-brand-red-coupon` | `#FF454B` | Invalid coupon border & cross icon |
| `brand-red-badge` | `--color-brand-red-badge` | `#FF5555` | "Invalid code" floating badge |

### App Store Yellow & Accent
| Token Name | CSS Variable | Hex / Gradient | Usage |
| :--- | :--- | :--- | :--- |
| `app-yellow-gradient` | `--color-app-yellow-gradient` | `linear-gradient(180deg, #FFE45E 0%, #FFC500 100%)` | Apple & Google Play button gradient |
| `app-yellow-shadow` | `--shadow-app-yellow` | `0 0 11px rgba(255,255,255,0.7), inset 0 1px 1px rgba(255,255,255,0.6)` | Button glow effect |

---

## 2. Typography Scale

| Class / Token | Font Size | Line Height | Font Weight | Color | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `text-display-40` (`t40`) | `40px` (2.5rem) | `1.2` | `700` (Bold) | `#4B4B4B` | Hero titles, primary headings |
| `text-display-30` (`t30`) | `30px` (1.875rem) | `1.25` | `700` (Bold) | `#4B4B4B` | Section headings, dialog titles |
| `text-p-20` (`t20`) | `20px` (1.25rem) | `1.5` | `400` / `500` | `#4B4B4B` | Large paragraph / body lead |
| `text-p-18` (`t18`) | `18px` (1.125rem) | `1.5` | `400` (Regular) | `#4B4B4B` | Medium paragraph / subtitle |
| `text-p-16` (`t16`) | `16px` (1rem) | `1.5` | `400` (Regular) | `#4B4B4B` | Standard body copy |
| `text-p-14` (`t14`) | `14px` (0.875rem) | `1.5` | `400` (Regular) | `#4B4B4B` | Compact body / secondary text |
| `text-caption-11` | `11px` (0.6875rem) | `1.4` | `600` / `700` | `#777777` | Input text, button labels, badge text |
| `text-caption-10` | `10px` (0.625rem) | `1.4` | `400` / `500` | `#777777` | Progress text, checkbox labels, notes |
| `text-caption-9` | `9px` (0.5625rem) | `1.35` | `400` / `700` | `#555555` | Plan copy text, floating badges |

---

## 3. Component Architecture & State Matrix

### 1. Form Inputs (`Input` & `CardPaymentInput`)
- **Dimensions**: Width `250px` (Email) / `240px` (Card), Height `38px`, Border radius `6px` (`rounded-[6px]`).
- **States**:
  - `normal`: Border `1px solid #CFCFCF`, text `#C6C6C6`, placeholder `#C7C7C7`.
  - `focused`: Border `2px solid #514CFF`, padding offset `11px` (or `9px`).
  - `typing`: Border `2px solid #514CFF`, typed value active `#333333`.
  - `filled`: Border `1px solid #7B78FF`, text `#3F3F3F` / `#333333`.
  - `error`: Border `2px solid #FF3E42`, text `#3E3E3E`.
- **Adornments**:
  - Email: SVG Mail icon (outline).
  - Card Payment: Three brand chips (Visa in navy `#1A237E`, Mastercard overlapping circles `#E52B2B` & `#F3A400`, Amex `#39A9C9`).

### 2. Multi-Step Progress Bar (`StepProgress`)
- **Dimensions**: Width `240px`, Bar height `4px`, Gap `4px`.
- **Segments**: 3 rounded track pills (`flex: 1`, `height: 4px`, `border-radius: 2px`).
- **States**:
  - `Step 1/3 (Sign up / Sign in)`: Bar 1 active `#7C78FF`, Bars 2-3 `#E8E8E8`.
  - `Step 2/3 (Choose plan)`: Bars 1 & 2 active `#7C78FF`, Bar 3 `#E8E8E8`.
  - `Step 3/3 (Purchase info)`: Bars 1, 2, 3 all active `#7C78FF`.
- **Label**: `10px` text below bar in `#777777`.

### 3. Checkboxes (`Checkbox`)
- **Dimensions**: `14px` x `14px`, Border radius `3px`.
- **States**:
  - `Normal (Checked)`: Background `#555555`, border `#555555`, white checkmark `✓`.
  - `Normal / Hover (Checked)`: Background `#555555`, border `#555555`, subtle focus ring.
  - `Empty`: Background `#FFFFFF`, border `1px solid #AAAAAA`.
  - `Empty / Hover`: Border `#7A77FF`, box shadow `0 0 0 1px #7A77FF`.

### 4. Pricing / Plan Cards (`PricingCard`)
- **Dimensions**: Width `113px`, Height `171px`, Border radius `9px`, Padding `14px 12px`.
- **Card Variants**:
  - `Yearly (Selected)`:
    - Border: `2px solid #3CC48A`, Box shadow: `0 0 9px rgba(0,0,0,0.12)`.
    - Radio Indicator: `23px` circle `#4ACB9A` with white checkmark `✓`.
    - Title: `"Yearly"` in `17px` bold.
    - Strikethrough price: `"$7.99"` in `13px` `#AAAAAA`.
    - Discounted price: `"$5.99 /mo"` in `17px` bold.
    - Footer copy: `"Billed annually at $47.90 + tax"` in `9px` `#555555`.
  - `Monthly (Default)`:
    - Border: `1px solid #888888`, Background: `#FFFFFF`.
    - Radio Indicator: Empty `23px` circle with `1px solid #999999`.
    - Title: `"Monthly"` in `17px` bold.
    - Price: `"$7.99 /mo"` in `17px` bold.
    - Footer copy: `"Billed monthly at $7.99 + tax"` in `9px` `#555555`.
  - `Monthly (Disabled)`:
    - Border: `1px solid #DDDDDD`, Text and prices muted `#C5C5C5` / `#C6C6C6`.

### 5. CTA Buttons (`Button` / `CTAButton`)
- **Dimensions**: Width `245px`, Height `42px`, Border radius `9px`, Font size `13px`, Font weight `700`.
- **Variants**:
  - `Green CTA`: Background `linear-gradient(90deg, #52D878, #35B85B)`, white text, optional shine glare effect.
  - `Purple CTA`: Background `linear-gradient(90deg, #9693EF, #5B58DF)`, white text, optional shine glare effect.
  - `Disabled CTA`: Background `#BDBDBD`, white text, cursor not-allowed.
  - `Error / Retry Message`: Warning caption `"Try again, something went wrong"` in `11px` `#FF4D4D` placed underneath button.

### 6. App Store Download Banner (`AppDownloadBanner`)
- **Banner Container**: Width `285px`, Height `220px`, Border radius `13px`, Background `#5959E7`, Padding `38px 32px`.
- **App Store Buttons**:
  - Dimensions: Width `221px`, Height `55px`, Border radius `13px`.
  - Border: `2px solid #FFFFFF`.
  - Background: `linear-gradient(180deg, #FFE45E, #FFC500)`.
  - Glow Shadow: `0 0 11px rgba(255,255,255,0.7), inset 0 1px 1px rgba(255,255,255,0.6)`.
  - Icons: Apple logo (`#111111`) and Google Play triangle logo.
  - Text: `"Open your App ›"` in `17px` bold `#333333`.

### 7. Google Pay Button (`GooglePayButton`)
- **Dimensions**: Width `78px`, Height `36px`, Border radius `6px`, Border `2px solid #666666`, Background `#FFFFFF`.
- **Content**: Google "G" in Google blue `#4285F4` (`14px` bold) + `"Pay"` in `11px` bold `#333333`.
- **Variant 2**: Subtle drop shadow `box-shadow: 0 1px 2px rgba(0,0,0,0.15)`.

### 8. Coupon Code Component (`CouponCode`)
- **Accordion Triggers**:
  - `Muted`: `"Have a coupon code? ⌄"` in `11px` `#BBBBBB`.
  - `Active/Purple`: `"Have a coupon code? ⌄"` in `11px` `#5B58E7`.
- **Expanded Input**: Height `38px`, Width `240px`, Border `2px solid #5754F3`, Border radius `6px`.
- **Validation States**:
  - `Empty`: Placeholder `"Enter code here"`, ticket icon on right.
  - `Valid`: Border `#28B867`, text `"78BCD1998"`, green checkmark circle icon.
  - `Valid with Badge`: Green floating badge `"Cool, we got you covered"` attached underneath/above.
  - `Invalid with Badge`: Border `#FF454B`, text `"78BCD1998"`, red cross icon, red floating badge `"Invalid code"`.
- **Disclaimer**: `*Discount coupons void free trials` in `10px` `#555555`.
