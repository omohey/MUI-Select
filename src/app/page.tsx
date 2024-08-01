"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Day from '@/components/Day';

const options = [
  { value: 'sunday', label: 'Sunday', color: 'red' },
  { value: 'monday', label: 'Monday', color: 'green' },
  { value: 'tuesday', label: 'Tuesday', color: 'aqua' },
  { value: 'wednesday', label: 'Wednesday', color: 'yellow' },
  { value: 'thursday', label: 'Thursday', color: 'orange' },
  { value: 'friday', label: 'Friday', color: 'purple' },
  { value: 'saturday', label: 'Saturday', color: 'pink' },
];


export default function Home() {
  const [day, setDay] = React.useState('');
  const [dayMultiple, setDayMultiple] = React.useState<string[]>([]);


  const handleChange = (event: SelectChangeEvent) => {
    setDay(event.target.value as string);
  };

  const handleChangeMultiple = (event: SelectChangeEvent<typeof dayMultiple>) => {
    const {
      target: { value },
    } = event;
    setDayMultiple(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <main>

      <Box >
        <h3>Single Select</h3>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Day</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={day}
            label="Day"
            onChange={handleChange}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {<Day label={option.label} color={option.color} />}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <h3>Multiple Select</h3>
        <FormControl fullWidth>
          <InputLabel id="multiple-label">Day</InputLabel>
          <Select
            labelId="multiple-label"
            id="multiple"
            value={dayMultiple}
            label="Day"
            onChange={handleChangeMultiple}
            multiple
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {<Day label={option.label} color={option.color} />}
              </MenuItem>
            ))}
          </Select>
        </FormControl>


      </Box>

    </main>
  );
}




