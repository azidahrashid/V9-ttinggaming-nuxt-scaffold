export type GameCard = {
  id: string
  title: string
  subtitle?: string
  badge?: string
  image?: string
  favourite?: boolean
}

export type GameSection = {
  id: string
  title: string
  eyebrow?: string
  filters?: string[]
  cards: GameCard[]
}

export const primaryNavigation = [
  { label: '파칭코', key: 'pachinko' },
  { label: '카지노', key: 'casino' },
  { label: '슬롯', key: 'slot' },
  { label: '스포츠', key: 'sports' },
  { label: '스포츠북', key: 'sportsbook' },
  { label: '미니게임', key: 'mini-game' },
  { label: '브랜드 게임', key: 'brand-game' }
]

export const utilityNavigation = [
  '마이페이지',
  '이벤트',
  '고객센터',
  '자주 물어보는 질문',
  '이용규정',
  '도메인',
  '텔레그램'
]

export const languageOptions = ['한국어', 'English', '中文']

export const heroCategories = [
  { title: '파칭코', key: 'pachinko' },
  { title: '스포츠', key: 'sports' },
  { title: 'e스포츠', key: 'esports' },
  { title: '카지노', key: 'casino' },
  { title: '슬롯', key: 'slot' },
  { title: '미니게임', key: 'mini-game' },
  { title: '브랜드 게임', key: 'brand-game' }
]

export const gameSections: GameSection[] = [
  {
    id: 'pachinko',
    title: '파칭코',
    filters: ['인기', '추천', '모두'],
    cards: [
      { id: 'pachinko-1', title: 'Pachinko Hall', subtitle: 'Development placeholder', badge: 'Public UI' },
      { id: 'pachinko-2', title: 'Pachinko Arena', subtitle: 'Stub card', badge: 'Stub' },
      { id: 'pachinko-3', title: 'Pachinko Classic', subtitle: 'Stub card', badge: 'Stub' }
    ]
  },
  {
    id: 'brand-game',
    title: '브랜드 게임',
    filters: ['모두'],
    cards: [
      { id: 'brand-1', title: 'Brand Game', subtitle: 'Frontend-only placeholder', badge: 'No backend' },
      { id: 'brand-2', title: 'Creator Game', subtitle: 'Frontend-only placeholder', badge: 'No backend' }
    ]
  },
  {
    id: 'casino',
    title: '카지노',
    filters: ['인기', '추천', '모두'],
    cards: [
      { id: 'casino-1', title: 'Live Casino', subtitle: 'Provider placeholder', favourite: true },
      { id: 'casino-2', title: 'Table Lobby', subtitle: 'Provider placeholder', favourite: true },
      { id: 'casino-3', title: 'Baccarat', subtitle: 'Provider placeholder', favourite: true },
      { id: 'casino-4', title: 'Roulette', subtitle: 'Provider placeholder', favourite: true },
      { id: 'casino-5', title: 'Blackjack', subtitle: 'Provider placeholder', favourite: true },
      { id: 'casino-6', title: 'Dream Table', subtitle: 'Provider placeholder', favourite: true },
      { id: 'casino-7', title: 'Studio Lobby', subtitle: 'Provider placeholder', favourite: true },
      { id: 'casino-8', title: 'Casino Holdem', subtitle: 'Provider placeholder', favourite: true }
    ]
  },
  {
    id: 'slot',
    title: '슬롯',
    filters: ['인기', '추천', '모두'],
    cards: [
      { id: 'slot-1', title: 'Slot Lobby', subtitle: 'Provider placeholder', favourite: true },
      { id: 'slot-2', title: 'Mega Spin', subtitle: 'Provider placeholder', favourite: true },
      { id: 'slot-3', title: 'Jackpot Zone', subtitle: 'Provider placeholder', favourite: true },
      { id: 'slot-4', title: 'Fruit Deluxe', subtitle: 'Provider placeholder', favourite: true },
      { id: 'slot-5', title: 'Lucky Reels', subtitle: 'Provider placeholder', favourite: true },
      { id: 'slot-6', title: 'Pragmatic', subtitle: 'Provider placeholder', favourite: true },
      { id: 'slot-7', title: 'Tournament', subtitle: 'Provider placeholder', favourite: true },
      { id: 'slot-8', title: 'New Slots', subtitle: 'Provider placeholder', favourite: true }
    ]
  },
  {
    id: 'mini-game',
    title: '미니게임',
    filters: ['모두'],
    cards: [
      { id: 'mini-1', title: '보글보글 1', subtitle: 'BUBBLE 1' },
      { id: 'mini-2', title: '보글보글 2', subtitle: 'BUBBLE 2' },
      { id: 'mini-3', title: '보글보글 3', subtitle: 'BUBBLE 3' },
      { id: 'mini-4', title: '슈퍼 마리오 1', subtitle: 'SUPER MARIO 1' },
      { id: 'mini-5', title: '슈퍼 마리오 2', subtitle: 'SUPER MARIO 2' },
      { id: 'mini-6', title: '슈퍼 마리오 3', subtitle: 'SUPER MARIO 3' },
      { id: 'mini-7', title: '룰렛 1', subtitle: 'ROULETTE 1' },
      { id: 'mini-8', title: '룰렛 2', subtitle: 'ROULETTE 2' }
    ]
  }
]
