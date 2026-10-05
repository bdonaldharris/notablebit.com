# Contact page redesign
labels: redesign,page

**Spec:** README "Contact"; `NotableBIT Contact.dc.html`, `screenshots/contact.png`.

- [ ] Light header (in flow), title on one line, lede
- [ ] Restyle `contact-form.tsx` fields, labels, focus ring, status colors; keep `useActionState` and the server action
- [ ] Update success message punctuation (comma instead of em dash)
- [ ] Required-field and validation states remain accessible (`aria-live`, `aria-invalid`)

**Acceptance:** matches screenshot; submitting still sends via the existing action.

Design handoff: see README.md in design_handoff_notablebit_redesign/.
