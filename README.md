# RDVJ Foundation: GitHub Pages + Namecheap + Stripe

## Website
Static, responsive site for `https://rdvjfoundation.org`. The library images are architectural concepts, not photographs of a built facility. The mission includes opportunity, lifelong learning, spirituality, culture, community, and inspiring libraries.

## 1. Publish with GitHub Pages
1. Create or open the repository intended for the site. Upload **the contents** of this folder to the repository root (not the enclosing folder).
2. GitHub repository **Settings → Pages**: Deploy from a branch, `main`, `/ (root)`, then Save.
3. In Pages **Custom domain**, enter `rdvjfoundation.org`. This package includes `CNAME`.
4. Wait for DNS verification, then enable **Enforce HTTPS** when available.

## 2. Configure Namecheap DNS
In Namecheap **Domain List → Manage → Advanced DNS**, set the apex `@` to these four GitHub Pages A records (per GitHub documentation, verify before using):
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Set `www` CNAME to `<YOUR-GITHUB-USERNAME>.github.io` (replace placeholder). Remove conflicting parking/redirect records. GitHub Pages may also request domain verification using a TXT record. Verify DNS and HTTPS in GitHub before announcing launch.

## 3. Activate Stripe donations
1. Use the 9nth Dimension Stripe account for RDVJ Foundation donations. The website identifies the two organizations as sister companies and discloses which account processes donations.
2. The live one-time Stripe Payment Link in `config.js` lets donors choose their amount in USD. Stripe Tax is off for this link.
3. If the link changes, update `stripeOneTimeUrl` with the public checkout URL. Do not paste secret keys, API keys or dashboard URLs.
4. Commit changes, allow GitHub Pages to deploy, then verify the Donate button, checkout, receipts, statement descriptor, refunds, and confirmation page.
5. The website keeps a safe sharing/contact fallback until valid Stripe links are configured. It does not itself collect card details.

## 4. Legal and communications checks
- Verify current IRS recognition, California status and fundraising compliance, especially for donations solicited online and spending in the Philippines.
- Review corporate purpose, bylaws, board approval, foreign grant/operations controls, privacy policy, refund/contact disclosures and any faith-related programming statements.
- Do not imply the library is already constructed or that contributions are restricted to construction unless that is how the funds will actually be used and accounted for.
- Do not publish donor data or Stripe secret keys in GitHub.

## Files
`index.html`, `styles.css`, `script.js`, `config.js`, `CNAME`, `assets/`.
