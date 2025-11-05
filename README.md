# @hudoro/button

> Customizable button with loading states, icons, and multiple variants for actions and form submissions.

**Type:** Form Control | **Version:** 1.0.x

---

## When to Use

✅ **Use for:**
- Triggering actions (save, delete, submit)
- Form submissions
- Opening dialogs/modals

❌ **Don't use for:**
- Pure page navigation (use Link)
- External URLs (use anchor tag)

---

## Installation

```bash
pnpm add @hudoro/button
```

---

## Quick Start

```tsx
import { Button } from '@hudoro/button';

// Basic
<Button primary size="md">Click Me</Button>

// With loading
<Button primary isLoading={loading} onClick={handleSave}>Save</Button>

// With icon
<Button primary iconLeft={<Icon />}>Save</Button>

// Icon only
<Button danger iconLeft={<TrashIcon />} aria-label="Delete" />

// Full width
<Button primary fullWidth>Submit</Button>
```

---

## Common Patterns

### Loading State
```tsx
const [loading, setLoading] = useState(false);

const handleSave = async () => {
  setLoading(true);
  await saveData();
  setLoading(false);
};

<Button primary isLoading={loading} onClick={handleSave}>Save</Button>
```
**Purpose:** Prevent double-clicks during async operations.

### Button Variants
```tsx
<Button primary>Primary Action</Button>
<Button secondary>Secondary</Button>
<Button danger>Delete</Button>
<Button success>Approve</Button>
<Button warning>Archive</Button>
<Button link>Subtle Action</Button>
```

### With Icons
```tsx
// Icon must be React element, not function
<Button iconLeft={<SaveIcon />}>Save</Button>
<Button iconRight={<ArrowIcon />}>Next</Button>

// Icon only - MUST have aria-label
<Button iconLeft={<TrashIcon />} aria-label="Delete" danger />
```

---

## Props

### Size & Appearance
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'xs'\|'sm'\|'md'\|'lg'` | `'md'` | Button size (xs:28px, sm:32px, md:36px, lg:42px) |
| `corner` | `'rounded'\|'circular'` | `'rounded'` | Border radius style |
| `fullWidth` | `boolean` | `false` | Span 100% container width |

### Variants (use ONE)
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `primary` | `boolean` | `false` | Blue - main actions |
| `secondary` | `boolean` | `false` | Gray - alternatives |
| `tertiary` | `boolean` | `false` | Tertiary variant |
| `quaternary` | `boolean` | `false` | Quaternary variant |
| `link` | `boolean` | `false` | Text only |
| `success` | `boolean` | `false` | Green - positive |
| `danger` | `boolean` | `false` | Red - destructive |
| `warning` | `boolean` | `false` | Orange - caution |
| `variant` | `string` | `'primary'` | Alternative: string-based variant |

### Icons & Loading
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `iconLeft` | `ReactElement<SVGProps>` | - | Icon on left (auto-sized) |
| `iconRight` | `ReactElement<SVGProps>` | - | Icon on right (auto-sized) |
| `isLoading` | `boolean` | `false` | Show spinner, disable button |

### HTML Button Props
All standard button props supported: `onClick`, `disabled`, `type`, `form`, `name`, `value`, `tabIndex`, `aria-label`, `className`, etc.

**Note:** `style` prop not supported.

---

## TypeScript

```tsx
import { Button, ButtonProps } from '@hudoro/button';

const props: ButtonProps = {
  size: 'lg',
  primary: true,
  isLoading: false,
  onClick: () => console.log('Clicked')
};
```

**Type Exports:** `ButtonProps`, `Size`, `ButtonIconProps`

---

## Accessibility

**Keyboard:** Tab, Enter, Space work as expected.

**Required:**
- Add `aria-label` for icon-only buttons
- Button auto-disables when loading

```tsx
// Good - icon only with label
<Button iconLeft={<TrashIcon />} aria-label="Delete item" danger />

// Good - with description
<Button aria-describedby="help-text" primary>Save</Button>
<span id="help-text" hidden>Saves without publishing</span>
```

---

## Styling

**CSS Classes:** `.hudoro-button`, `.hudoro-button-[size]`, `.hudoro-button-[variant]`

**Custom styling:**
```tsx
<Button className="custom-class" primary>Styled</Button>
```

**Note:** Styles auto-inject to `<head>`. No CSS import needed.

---

## Troubleshooting

### Icons Not Showing
```tsx
// ❌ Wrong - passing function
<Button iconLeft={MyIcon} />

// ✅ Correct - passing element
<Button iconLeft={<MyIcon />} />
```

### Multiple Variants Active
Only set ONE variant prop. Don't mix `primary`, `secondary`, `danger`, etc.

### Full Width Not Working
Parent must have defined width and block display.

### Click Handler Not Firing
Check if button is `disabled` or `isLoading={true}`.

---

## Best Practices

**DO:**
- Use `primary` for main action (limit one per view)
- Add `isLoading` during async operations
- Provide `aria-label` for icon-only buttons
- Use `lg` size (42px) for mobile touch targets

**DON'T:**
- Mix variant props (primary + danger)
- Omit text without aria-label
- Use for navigation (use Link component)
- Use tiny buttons on mobile

---

## Related Components
- **@hudoro/fab** - Floating action buttons
- **@hudoro/icon** - Icon library

---

## Technical Details
- **Bundle:** ~8KB ES, ~10KB UMD, ~3KB gzipped
- **Deps:** react >=18.0.0, react-dom >=18.0.0
- **Browser:** Chrome/Firefox/Safari latest 2 versions

---

## Complete Example

```tsx
import { Button } from '@hudoro/button';
import { useState } from 'react';

function ConfirmDialog() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 2000));
    alert('Done!');
    setOpen(false);
    setLoading(false);
  };

  return (
    <>
      <Button primary onClick={() => setOpen(true)}>Open</Button>

      {open && (
        <div style={{padding: 20, border: '1px solid #ccc'}}>
          <h3>Confirm?</h3>
          <Button success isLoading={loading} onClick={handleConfirm}>Yes</Button>
          <Button secondary disabled={loading} onClick={() => setOpen(false)}>No</Button>
        </div>
      )}
    </>
  );
}
```

---

**Last Updated:** 2025-11-05 | **License:** MIT
