import { PerformanceDataItem } from '@/helpers/types'
/**
 * @todo Clean the data types to replace it with real data from a database
 * @type Deejay also crosscheck the types
 */
export const demoPerformanceData: PerformanceDataItem[] = [
  {
    measure: 'Machine efficiency',
    unit: 9.1,
    target: 90,
    weight: 20,
    machineOutput: '',
    Jan: 84,
    Feb: 93,
    Apr: 71,
    May: 82,
    Jun: 83,
    Avg: 82.6,
    Total: 413
  },
  {
    measure: 'Actual quantity',
    unit: 22,
    target: 95,
    weight: 20,
    machineOutput: 'Quantity',
    Jan: 83,
    Feb: 72,
    Apr: 84,
    May: 90,
    Jun: 81,
    Avg: 82,
    Total: 410
  },
  {
    measure: 'Consumer complaints',
    unit: 6,
    target: 0.5,
    weight: 10,
    machineOutput: '',
    Jan: 0.7,
    Feb: 0.6,
    Apr: 1.2,
    May: 1.3,
    Jun: 1.0,
    Avg: 0.96,
    Total: 4.8
  },
  {
    measure: 'Waste',
    unit: 10,
    target: 0.5,
    weight: 10,
    machineOutput: 'House keeping',
    Jan: 0.4,
    Feb: 0.8,
    Apr: 1.2,
    May: 1.6,
    Jun: 1.0,
    Avg: 1,
    Total: 5
  },
  {
    measure: 'Cleanliness',
    unit: 5.4,
    target: 60,
    weight: 10,
    machineOutput: '',
    Jan: 61,
    Feb: 28,
    Apr: 41,
    May: 57,
    Jun: 55,
    Avg: 48.4,
    Total: 242
  }
]
