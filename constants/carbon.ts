export interface ColorToken {
  token: string
  varName: string
}

export const colorTokens: ColorToken[] = [
  { token: 'interactive', varName: '--cds-interactive' },
  { token: 'background-brand', varName: '--cds-background-brand' },
  { token: 'support-error', varName: '--cds-support-error' },
  { token: 'support-success', varName: '--cds-support-success' },
  { token: 'support-warning', varName: '--cds-support-warning' },
  { token: 'support-info', varName: '--cds-support-info' },
  { token: 'background-inverse', varName: '--cds-background-inverse' },
  { token: 'border-interactive', varName: '--cds-border-interactive' },
]

export interface TypeStyle {
  name: string
  label: string
  className: string
}

export const typeStyles: TypeStyle[] = [
  {
    name: 'heading-04',
    label: 'Heading 04',
    className: 'type-demo--heading-04',
  },
  {
    name: 'heading-03',
    label: 'Heading 03',
    className: 'type-demo--heading-03',
  },
  { name: 'body-01', label: 'Body 01', className: 'type-demo--body-01' },
  { name: 'label-01', label: 'Label 01', className: 'type-demo--label-01' },
  { name: 'code-01', label: 'Code 01', className: 'type-demo--code-01' },
]
