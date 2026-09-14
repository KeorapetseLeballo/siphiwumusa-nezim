export interface ResourceRow {
  id: string
  name: string
  type: string
  region: string
  status: string
}

export interface TableHeader {
  key: string
  header: string
}

export const tableHeaders: TableHeader[] = [
  { key: 'name', header: 'Name' },
  { key: 'type', header: 'Type' },
  { key: 'region', header: 'Region' },
  { key: 'status', header: 'Status' },
]

export const resourceRows: ResourceRow[] = [
  {
    id: '1',
    name: 'cloud-platform-prod',
    type: 'Kubernetes cluster',
    region: 'US East',
    status: 'Active',
  },
  {
    id: '2',
    name: 'ml-training-pipeline',
    type: 'Code engine',
    region: 'US South',
    status: 'Active',
  },
  {
    id: '3',
    name: 'customer-events-db',
    type: 'PostgreSQL',
    region: 'EU (Frankfurt)',
    status: 'Maintenance',
  },
  {
    id: '4',
    name: 'edge-gateway-tokyo',
    type: 'API gateway',
    region: 'Asia Pacific',
    status: 'Stopped',
  },
]

export const statusTagMap: Record<string, 'green' | 'magenta' | 'gray'> = {
  Active: 'green',
  Maintenance: 'magenta',
  Stopped: 'gray',
}
