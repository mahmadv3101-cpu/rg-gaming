import gta5 from "@/assets/games/gta5.jpg";
import rdr2 from "@/assets/games/rdr2.jpg";
import cyberpunk from "@/assets/games/cyberpunk.jpg";
import warzone from "@/assets/games/warzone.jpg";
import valorant from "@/assets/games/valorant.jpg";
import minecraft from "@/assets/games/minecraft.jpg";
import eafc from "@/assets/games/eafc.jpg";
import fortnite from "@/assets/games/fortnite.jpg";
import pubg from "@/assets/games/pubg.jpg";
import eldenRing from "@/assets/games/elden-ring.jpg";

export type Game = {
  slug: string;
  title: string;
  cover: string;
  rating: number;
  genre: string;
  platforms: string[];
  size: string;
  releaseDate: string;
  description: string;
  trailerId: string; // YouTube ID
  screenshots: string[];
  systemRequirements: { label: string; value: string }[];
  store: { label: string; url: string };
  tags: string[];
};

export const games: Game[] = [
  {
    slug: "gta-5",
    title: "Grand Theft Auto V",
    cover: gta5,
    rating: 4.8,
    genre: "Open World",
    platforms: ["PC", "PS5", "Xbox"],
    size: "94 GB",
    releaseDate: "2013-09-17",
    description:
      "Experience Los Santos and Blaine County in the most ambitious open world ever created. Switch between three unique criminals as you pull off the heist of a lifetime.",
    trailerId: "QkkoHAzjnUs",
    screenshots: [gta5, cyberpunk, warzone],
    systemRequirements: [
      { label: "OS", value: "Windows 10 64-bit" },
      { label: "CPU", value: "Intel Core i5-3470 / AMD Ryzen 3" },
      { label: "RAM", value: "8 GB" },
      { label: "GPU", value: "NVIDIA GTX 660 2GB / AMD HD 7870" },
    ],
    store: { label: "Buy on Rockstar Store", url: "https://store.rockstargames.com/game/buy-grand-theft-auto-v" },
    tags: ["Open World", "Action", "Multiplayer"],
  },
  {
    slug: "red-dead-redemption-2",
    title: "Red Dead Redemption 2",
    cover: rdr2,
    rating: 4.9,
    genre: "Open World",
    platforms: ["PC", "PS5", "Xbox"],
    size: "150 GB",
    releaseDate: "2018-10-26",
    description:
      "America, 1899. Arthur Morgan and the Van der Linde gang are outlaws on the run in this epic tale of life in America at the dawn of the modern age.",
    trailerId: "eaW0tYpxyp0",
    screenshots: [rdr2, eldenRing, gta5],
    systemRequirements: [
      { label: "OS", value: "Windows 10 64-bit" },
      { label: "CPU", value: "Intel Core i5-2500K / AMD FX-6300" },
      { label: "RAM", value: "12 GB" },
      { label: "GPU", value: "NVIDIA GTX 770 2GB / AMD R9 280" },
    ],
    store: { label: "Buy on Rockstar Store", url: "https://store.rockstargames.com/game/red-dead-redemption-2" },
    tags: ["Open World", "Adventure", "Story"],
  },
  {
    slug: "cyberpunk-2077",
    title: "Cyberpunk 2077",
    cover: cyberpunk,
    rating: 4.6,
    genre: "RPG",
    platforms: ["PC", "PS5", "Xbox"],
    size: "70 GB",
    releaseDate: "2020-12-10",
    description:
      "An open-world action-adventure RPG set in Night City — a megalopolis obsessed with power, glamour, and body modification. Become V, a cyberpunk mercenary.",
    trailerId: "8X2kIfS6fb8",
    screenshots: [cyberpunk, valorant, warzone],
    systemRequirements: [
      { label: "OS", value: "Windows 10 64-bit" },
      { label: "CPU", value: "Intel Core i7-6700 / AMD Ryzen 5 1600" },
      { label: "RAM", value: "12 GB" },
      { label: "GPU", value: "NVIDIA GTX 1060 6GB / AMD RX 580" },
    ],
    store: { label: "Buy on Steam", url: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/" },
    tags: ["RPG", "Sci-Fi", "Open World"],
  },
  {
    slug: "call-of-duty-warzone",
    title: "Call of Duty: Warzone",
    cover: warzone,
    rating: 4.4,
    genre: "Battle Royale",
    platforms: ["PC", "PS5", "Xbox"],
    size: "85 GB",
    releaseDate: "2020-03-10",
    description:
      "Drop into the next evolution of battle royale. Free-to-play, fast-paced, and packed with intense gunplay across massive Call of Duty maps.",
    trailerId: "0Ti0eQz5xJM",
    screenshots: [warzone, pubg, valorant],
    systemRequirements: [
      { label: "OS", value: "Windows 10 64-bit" },
      { label: "CPU", value: "Intel Core i3-6100 / AMD Ryzen 3 1200" },
      { label: "RAM", value: "8 GB" },
      { label: "GPU", value: "NVIDIA GTX 960 / AMD RX 470" },
    ],
    store: { label: "Play Free on Battle.net", url: "https://www.callofduty.com/warzone" },
    tags: ["FPS", "Battle Royale", "Free-to-Play"],
  },
  {
    slug: "valorant",
    title: "Valorant",
    cover: valorant,
    rating: 4.7,
    genre: "Shooting",
    platforms: ["PC"],
    size: "30 GB",
    releaseDate: "2020-06-02",
    description:
      "A 5v5 character-based tactical shooter from Riot Games. Outwit, outplay, and outshine your competition with precise gunplay and unique agent abilities.",
    trailerId: "e_E9W2Vsr3A",
    screenshots: [valorant, warzone, cyberpunk],
    systemRequirements: [
      { label: "OS", value: "Windows 10 64-bit" },
      { label: "CPU", value: "Intel Core i3-4150" },
      { label: "RAM", value: "4 GB" },
      { label: "GPU", value: "Intel HD 4000" },
    ],
    store: { label: "Play Free on Riot", url: "https://playvalorant.com/" },
    tags: ["FPS", "Tactical", "Esports"],
  },
  {
    slug: "minecraft",
    title: "Minecraft",
    cover: minecraft,
    rating: 4.9,
    genre: "Survival",
    platforms: ["PC", "PS5", "Xbox", "Mobile"],
    size: "1 GB",
    releaseDate: "2011-11-18",
    description:
      "Build, explore, and survive in a randomly generated world made of blocks. Play alone or with friends in the most popular sandbox game of all time.",
    trailerId: "MmB9b5njVbA",
    screenshots: [minecraft, eldenRing, fortnite],
    systemRequirements: [
      { label: "OS", value: "Windows 10 / macOS / Linux" },
      { label: "CPU", value: "Intel Core i3-3210" },
      { label: "RAM", value: "4 GB" },
      { label: "GPU", value: "Intel HD 4000" },
    ],
    store: { label: "Buy on Minecraft.net", url: "https://www.minecraft.net/en-us/store/minecraft-deluxe-collection-pc" },
    tags: ["Sandbox", "Survival", "Family"],
  },
  {
    slug: "ea-fc-25",
    title: "EA SPORTS FC 25",
    cover: eafc,
    rating: 4.3,
    genre: "Sports",
    platforms: ["PC", "PS5", "Xbox"],
    size: "100 GB",
    releaseDate: "2024-09-27",
    description:
      "Win as one in EA SPORTS FC 25 with new ways to play, manage, and team up. The world's game has never felt this real.",
    trailerId: "vOsF_YTXEPs",
    screenshots: [eafc, valorant, fortnite],
    systemRequirements: [
      { label: "OS", value: "Windows 10 64-bit" },
      { label: "CPU", value: "Intel Core i5-6600K / AMD Ryzen 5 1600" },
      { label: "RAM", value: "8 GB" },
      { label: "GPU", value: "NVIDIA GTX 1050 Ti / AMD RX 570" },
    ],
    store: { label: "Buy on EA Store", url: "https://www.ea.com/games/ea-sports-fc/fc-25" },
    tags: ["Sports", "Football", "Multiplayer"],
  },
  {
    slug: "fortnite",
    title: "Fortnite",
    cover: fortnite,
    rating: 4.5,
    genre: "Battle Royale",
    platforms: ["PC", "PS5", "Xbox", "Mobile", "Switch"],
    size: "30 GB",
    releaseDate: "2017-07-25",
    description:
      "Drop in, gear up, and compete. From battle royale to creative mode, Fortnite is the ultimate playground for players of all styles.",
    trailerId: "2gUtfBmw86Y",
    screenshots: [fortnite, valorant, minecraft],
    systemRequirements: [
      { label: "OS", value: "Windows 10 64-bit" },
      { label: "CPU", value: "Intel Core i3-3225" },
      { label: "RAM", value: "8 GB" },
      { label: "GPU", value: "Intel HD 4000" },
    ],
    store: { label: "Play Free on Epic Games", url: "https://store.epicgames.com/en-US/p/fortnite" },
    tags: ["Battle Royale", "Free-to-Play", "Multiplayer"],
  },
  {
    slug: "pubg",
    title: "PUBG: Battlegrounds",
    cover: pubg,
    rating: 4.2,
    genre: "Battle Royale",
    platforms: ["PC", "PS5", "Xbox", "Mobile"],
    size: "40 GB",
    releaseDate: "2017-12-20",
    description:
      "Land, loot, and last as one of 100 players battling for survival on massive realistic maps. The original battle royale experience.",
    trailerId: "h6Jfx8oW9Mk",
    screenshots: [pubg, warzone, fortnite],
    systemRequirements: [
      { label: "OS", value: "Windows 10 64-bit" },
      { label: "CPU", value: "Intel Core i5-4430 / AMD FX-6300" },
      { label: "RAM", value: "8 GB" },
      { label: "GPU", value: "NVIDIA GTX 960 / AMD R7 370" },
    ],
    store: { label: "Play Free on Steam", url: "https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/" },
    tags: ["Battle Royale", "Survival", "FPS"],
  },
  {
    slug: "elden-ring",
    title: "Elden Ring",
    cover: eldenRing,
    rating: 4.9,
    genre: "RPG",
    platforms: ["PC", "PS5", "Xbox"],
    size: "60 GB",
    releaseDate: "2022-02-25",
    description:
      "A vast fantasy world born from the collaboration of Hidetaka Miyazaki and George R.R. Martin. Rise, Tarnished, and be guided by grace.",
    trailerId: "E3Huy2cdih0",
    screenshots: [eldenRing, rdr2, cyberpunk],
    systemRequirements: [
      { label: "OS", value: "Windows 10 64-bit" },
      { label: "CPU", value: "Intel Core i5-8400 / AMD Ryzen 3 3300X" },
      { label: "RAM", value: "12 GB" },
      { label: "GPU", value: "NVIDIA GTX 1060 3GB / AMD RX 580 4GB" },
    ],
    store: { label: "Buy on Steam", url: "https://store.steampowered.com/app/1245620/ELDEN_RING/" },
    tags: ["RPG", "Souls-like", "Open World"],
  },
];

export const getGame = (slug: string) => games.find((g) => g.slug === slug);

export const categories = [
  { name: "Open World", icon: "🌍", count: 24 },
  { name: "Shooting", icon: "🎯", count: 38 },
  { name: "Racing", icon: "🏎️", count: 16 },
  { name: "Sports", icon: "⚽", count: 22 },
  { name: "Battle Royale", icon: "🪂", count: 12 },
  { name: "Survival", icon: "🏕️", count: 18 },
  { name: "Horror", icon: "👻", count: 14 },
  { name: "RPG", icon: "⚔️", count: 31 },
];
