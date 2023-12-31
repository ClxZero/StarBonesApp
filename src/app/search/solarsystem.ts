import { ExoplanetsAPIObject } from "../models/exoApi.interface";

export const solarSystemObjects: ExoplanetsAPIObject[] = [
    {
      id: 2,
      pl_hostname: 'Mercury',
      display_name: 'Mercury',
      description: 'The closest planet to the Sun.',
      planet_type: 'Terrestrial',
      st_dist: 0.39,
      st_optmag: -0.39,
      pl_radj: 2439.7,
      pl_rade: 2439.7,
      pl_massj: 0.0553,
      pl_discmethod: 'Radial Velocity',
      list_image: 'mercury-thumb.jpg',
      short_description: 'The closest planet to the Sun.',
      ranger_system: true,
      exo_id: 'mercury',
    },
    {
      id: 3,
      pl_hostname: 'Venus',
      display_name: 'Venus',
      description: 'The second planet from the Sun, known for its extreme heat.',
      planet_type: 'Terrestrial',
      st_dist: 0.72,
      st_optmag: -4.40,
      pl_radj: 6051.8,
      pl_rade: 6051.8,
      pl_massj: 0.815,
      pl_discmethod: 'Radial Velocity',
      list_image: 'venus-thumb.jpg',
      short_description: 'The second planet from the Sun, known for its extreme heat.',
      ranger_system: true,
      exo_id: 'venus',
    },
    {
      id: 4,
      pl_hostname: 'Mars',
      display_name: 'Mars',
      description: 'The fourth planet from the Sun, often called the Red Planet.',
      planet_type: 'Terrestrial',
      st_dist: 0.00001581,
      st_optmag: -1.52,
      pl_radj: 3389.5,
      pl_rade: 3389.5,
      pl_massj: 0.107,
      pl_discmethod: 'Radial Velocity',
      list_image: 'mars-thumb.jpg',
      short_description: 'The fourth planet from the Sun, often called the Red Planet.',
      ranger_system: true,
      exo_id: 'mars',
    },
    {
      id: 5,
      pl_hostname: 'Jupiter',
      display_name: 'Jupiter',
      description: 'The largest planet in the solar system, known for its gas giant status.',
      planet_type: 'Gas Giant',
      st_dist: 0.00004944,
      st_optmag: -9.40,
      pl_radj: 69911,
      pl_rade: 69911,
      pl_massj: 317.8,
      pl_discmethod: 'Radial Velocity',
      list_image: 'jupiter-thumb.jpg',
      short_description: 'The largest planet in the solar system, known for its gas giant status.',
      ranger_system: true,
      exo_id: 'jupiter',
    },
    {
      id: 6,
      pl_hostname: 'Saturn',
      display_name: 'Saturn',
      description: 'The ringed planet, famous for its stunning ring system.',
      planet_type: 'Gas Giant',
      st_dist: 0.0001008,
      st_optmag: -8.88,
      pl_radj: 58232,
      pl_rade: 58232,
      pl_massj: 95.2,
      pl_discmethod: 'Radial Velocity',
      list_image: 'saturn-thumb.jpg',
      short_description: 'The ringed planet, famous for its stunning ring system.',
      ranger_system: true,
      exo_id: 'saturn',
    },
    {
      id: 7,
      pl_hostname: 'Uranus',
      display_name: 'Uranus',
      description: 'The ice giant planet with a unique sideways rotation.',
      planet_type: 'Ice Giant',
      st_dist: 0.0001988,
      st_optmag: -7.19,
      pl_radj: 25362,
      pl_rade: 25362,
      pl_massj: 14.5,
      pl_discmethod: 'Radial Velocity',
      list_image: 'uranus-thumb.jpg',
      short_description: 'The ice giant planet with a unique sideways rotation.',
      ranger_system: true,
      exo_id: 'uranus',
    },
    {
      id: 8,
      pl_hostname: 'Neptune',
      display_name: 'Neptune',
      description: 'The farthest known planet from the Sun in our solar system.',
      planet_type: 'Ice Giant',
      st_dist: 0.0003133,
      st_optmag: -8.95,
      pl_radj: 24622,
      pl_rade: 24622,
      pl_massj: 17.1,
      pl_discmethod: 'Radial Velocity',
      list_image: 'neptune-thumb.jpg',
      short_description: 'The farthest known planet from the Sun in our solar system.',
      ranger_system: true,
      exo_id: 'neptune',
    },
    {
      id: 9,
      pl_hostname: 'Ceres',
      display_name: 'Ceres',
      description: 'The largest object in the asteroid belt, classified as a dwarf planet.',
      planet_type: 'Dwarf Planet',
      st_dist: 0.00002902,
      st_optmag: 3.34,
      pl_radj: 469.73,
      pl_rade: 469.73,
      pl_massj: 0.00016,
      pl_discmethod: 'N/A',
      list_image: 'ceres-thumb.jpg',
      short_description: 'The largest object in the asteroid belt, classified as a dwarf planet.',
      ranger_system: false,
      exo_id: 'ceres',
    },
  ];
  