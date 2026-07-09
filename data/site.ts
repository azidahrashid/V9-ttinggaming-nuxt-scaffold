export type NavItem = {
  label: string
  key: string
  to: string
  icon: string
  description?: string
  children?: { label: string; to: string }[]
}

export type Category = {
  title: string
  label: string
  key: string
  to: string
  icon: string
  description: string
}

export type GameCard = {
  id: string
  title: string
  subtitle: string
  badge?: string
  image: string
  category: string
}

export type GameSection = {
  id: string
  title: string
  icon: string
  to: string
  filters: string[]
  description: string
  cards: GameCard[]
}

export type RoutePage = {
  path: string
  title: string
  eyebrow: string
  description: string
  sectionId?: string
  cta?: string
}

const asset = (path: string) => `/assets/tting/${path}`

export const languages = [
  { label: '한국어', short: 'KR' },
  { label: 'English', short: 'EN' },
  { label: '中文', short: 'CN' }
]

export const primaryNavigation: NavItem[] = [
  {
    label: '파칭코',
    key: 'pachinko',
    to: '/games/pachinko',
    icon: asset('icons/pachinko.svg'),
    description: 'Pachinko lobby preview',
    children: [
      { label: '인기 파칭코', to: '/games/pachinko' },
      { label: '추천 파칭코', to: '/games/pachinko?filter=recommended' },
      { label: '전체 보기', to: '/games/pachinko' }
    ]
  },
  {
    label: '카지노',
    key: 'casino',
    to: '/games/casino',
    icon: asset('icons/casino.svg'),
    description: 'Live casino UI section',
    children: [
      { label: '라이브 카지노', to: '/games/casino' },
      { label: '테이블 게임', to: '/games/casino?filter=table' },
      { label: '인기 게임', to: '/games/casino?filter=popular' }
    ]
  },
  {
    label: '슬롯',
    key: 'slots',
    to: '/games/slots',
    icon: asset('icons/slots.svg'),
    description: 'Slot game cards',
    children: [
      { label: '프라그마틱', to: '/games/slots?provider=pragmatic' },
      { label: '슬롯 토너먼트', to: '/tournament' },
      { label: '신규 슬롯', to: '/games/slots?filter=new' }
    ]
  },
  {
    label: '스포츠',
    key: 'sports',
    to: '/games/sports',
    icon: asset('icons/sports.svg'),
    description: 'Sports landing page',
    children: [
      { label: '축구', to: '/games/sports?type=football' },
      { label: '농구', to: '/games/sports?type=basketball' },
      { label: 'E스포츠', to: '/games/esports' }
    ]
  },
  {
    label: '스포츠북',
    key: 'sportsbook',
    to: '/sportsbook',
    icon: asset('icons/sportsbook.svg'),
    description: 'Sportsbook page shell',
    children: [
      { label: '스포츠북 홈', to: '/sportsbook' },
      { label: '라이브 일정', to: '/sportsbook?tab=live' },
      { label: '결과', to: '/sportsbook?tab=results' }
    ]
  },
  {
    label: '미니게임',
    key: 'minigame',
    to: '/games/minigame',
    icon: asset('icons/minigame.svg'),
    description: 'Mini-game grid',
    children: [
      { label: '보글보글', to: '/games/minigame?series=bubble' },
      { label: '슈퍼 마리오', to: '/games/minigame?series=mario' },
      { label: '룰렛', to: '/games/minigame?series=roulette' }
    ]
  },
  {
    label: '브랜드 게임',
    key: 'brand-games',
    to: '/games/brand-games',
    icon: asset('icons/brandgame.svg'),
    description: 'Brand game area',
    children: [
      { label: '브랜드 게임', to: '/games/brand-games' },
      { label: 'BJ크리에이터', to: '/games/brand-games?type=creator' },
      { label: '이벤트 게임', to: '/events' }
    ]
  }
]

export const utilityNavigation = [
  { label: '마이페이지', to: '/mypage', icon: asset('icons/mypage.svg') },
  { label: '이벤트', to: '/events', icon: asset('icons/event.svg') },
  { label: '고객센터', to: '/support', icon: asset('icons/support.svg') },
  { label: '자주 물어보는 질문', to: '/faq', icon: asset('icons/faq.svg') },
  { label: '이용규정', to: '/rules', icon: asset('icons/rules.svg') },
  { label: '도메인', to: '/domain', icon: asset('icons/domain.svg') },
  { label: '텔레그램', to: '/telegram', icon: asset('icons/telegram.svg') }
]

export const heroCategories: Category[] = [
  {
    title: '파칭코',
    label: 'PACHINKO',
    key: 'pachinko',
    to: '/games/pachinko',
    icon: asset('icons/pachinko.svg'),
    description: 'Dark lobby card with gold accents'
  },
  {
    title: '스포츠',
    label: 'SPORTS',
    key: 'sports',
    to: '/games/sports',
    icon: asset('icons/sports.svg'),
    description: 'Sports page route shell'
  },
  {
    title: 'e스포츠',
    label: 'E-SPORTS',
    key: 'esports',
    to: '/games/esports',
    icon: asset('icons/esports.svg'),
    description: 'E-sports category route'
  },
  {
    title: '카지노',
    label: 'CASINO',
    key: 'casino',
    to: '/games/casino',
    icon: asset('icons/casino.svg'),
    description: 'Casino cards and modal triggers'
  },
  {
    title: '슬롯',
    label: 'SLOT',
    key: 'slots',
    to: '/games/slots',
    icon: asset('icons/slots.svg'),
    description: 'Slot provider card rows'
  },
  {
    title: '미니게임',
    label: 'MINI GAME',
    key: 'minigame',
    to: '/games/minigame',
    icon: asset('icons/minigame.svg'),
    description: 'Bubble, Mario and roulette demo cards'
  },
  {
    title: '브랜드 게임',
    label: 'BRAND GAME',
    key: 'brand-games',
    to: '/games/brand-games',
    icon: asset('icons/brandgame.svg'),
    description: 'Brand and creator page shell'
  }
]

const card = (id: string, title: string, subtitle: string, category: string, badge = 'DEMO'): GameCard => ({
  id,
  title,
  subtitle,
  badge,
  category,
  image: asset(`cards/${id}.svg`)
})

export const gameSections: GameSection[] = [
  {
    id: 'pachinko',
    title: '파칭코',
    icon: asset('icons/pachinko.svg'),
    to: '/games/pachinko',
    filters: ['인기', '추천', '모두'],
    description: 'Original page shows a titled pachinko row with popular/recommended/all filters.',
    cards: [
      card('pachinko-01', '파칭코 VIP', 'PACHINKO VIP', 'pachinko', 'HOT'),
      card('pachinko-02', '골든 파칭코', 'GOLDEN HALL', 'pachinko'),
      card('pachinko-03', '럭키 파칭코', 'LUCKY SPIN', 'pachinko'),
      card('pachinko-04', '클래식 파칭코', 'CLASSIC MODE', 'pachinko')
    ]
  },
  {
    id: 'brand-games',
    title: '브랜드 게임',
    icon: asset('icons/brandgame.svg'),
    to: '/games/brand-games',
    filters: ['모두'],
    description: 'Compact brand-game row matching the source order after pachinko.',
    cards: [
      card('brand-01', '브랜드 존', 'BRAND GAME', 'brand-games', 'NEW'),
      card('brand-02', '크리에이터 존', 'CREATOR ROOM', 'brand-games'),
      card('brand-03', '이벤트 존', 'EVENT PICK', 'brand-games')
    ]
  },
  {
    id: 'casino',
    title: '카지노',
    icon: asset('icons/casino.svg'),
    to: '/games/casino',
    filters: ['인기', '추천', '모두'],
    description: 'Live-casino style card grid with gold badges and dark card frames.',
    cards: [
      card('casino-01', '라이브 카지노', 'LIVE CASINO', 'casino', 'HOT'),
      card('casino-02', '바카라', 'BACCARAT', 'casino'),
      card('casino-03', '룰렛', 'ROULETTE', 'casino'),
      card('casino-04', '블랙잭', 'BLACKJACK', 'casino'),
      card('casino-05', '드림 테이블', 'DREAM TABLE', 'casino'),
      card('casino-06', '홀덤', 'CASINO HOLDEM', 'casino'),
      card('casino-07', '스튜디오', 'STUDIO LOBBY', 'casino'),
      card('casino-08', '카지노 VIP', 'VIP TABLE', 'casino')
    ]
  },
  {
    id: 'slots',
    title: '슬롯',
    icon: asset('icons/slots.svg'),
    to: '/games/slots',
    filters: ['인기', '추천', '모두'],
    description: 'Slot section recreated as provider-style cards with responsive rows.',
    cards: [
      card('slots-01', '프라그마틱', 'PRAGMATIC PLAY', 'slots', 'TOP'),
      card('slots-02', '메가 스핀', 'MEGA SPIN', 'slots'),
      card('slots-03', '잭팟 존', 'JACKPOT ZONE', 'slots'),
      card('slots-04', '럭키 릴', 'LUCKY REELS', 'slots'),
      card('slots-05', '토너먼트', 'TOURNAMENT', 'slots'),
      card('slots-06', '뉴 슬롯', 'NEW SLOTS', 'slots'),
      card('slots-07', '골드 라인', 'GOLD LINE', 'slots'),
      card('slots-08', '베스트 슬롯', 'BEST PICKS', 'slots')
    ]
  },
  {
    id: 'minigame',
    title: '미니게임',
    icon: asset('icons/minigame.svg'),
    to: '/games/minigame',
    filters: ['모두'],
    description: 'The live page exposes Bubble, Super Mario and Roulette mini-game card labels.',
    cards: [
      card('mini-01', '보글보글 1', 'BUBBLE 1', 'minigame', 'MINI'),
      card('mini-02', '보글보글 2', 'BUBBLE 2', 'minigame', 'MINI'),
      card('mini-03', '보글보글 3', 'BUBBLE 3', 'minigame', 'MINI'),
      card('mini-04', '슈퍼 마리오 1', 'SUPER MARIO 1', 'minigame', 'MINI'),
      card('mini-05', '슈퍼 마리오 2', 'SUPER MARIO 2', 'minigame', 'MINI'),
      card('mini-06', '슈퍼 마리오 3', 'SUPER MARIO 3', 'minigame', 'MINI'),
      card('mini-07', '룰렛 1', 'ROULETTE 1', 'minigame', 'MINI'),
      card('mini-08', '룰렛 2', 'ROULETTE 2', 'minigame', 'MINI')
    ]
  }
]

export const routePages: RoutePage[] = [
  { path: '/games/pachinko', title: '파칭코', eyebrow: 'GAME CATEGORY', description: '파칭코 카테고리 레이아웃입니다. 실제 게임 실행 기능은 포함하지 않습니다.', sectionId: 'pachinko' },
  { path: '/games/sports', title: '스포츠', eyebrow: 'SPORTS', description: '스포츠 페이지용 정적 프론트엔드 레이아웃입니다. 베팅 기능은 구현하지 않았습니다.' },
  { path: '/games/esports', title: 'e스포츠', eyebrow: 'E-SPORTS', description: 'e스포츠 카테고리의 빈 페이지를 대체하는 안전한 라우트입니다.' },
  { path: '/games/casino', title: '카지노', eyebrow: 'LIVE CASINO', description: '카지노 카드 목록과 로그인 모달 트리거를 보여주는 데모 페이지입니다.', sectionId: 'casino' },
  { path: '/games/slots', title: '슬롯', eyebrow: 'SLOT', description: '슬롯 카테고리의 반응형 카드 레이아웃입니다.', sectionId: 'slots' },
  { path: '/games/minigame', title: '미니게임', eyebrow: 'MINI GAME', description: '보글보글, 슈퍼 마리오, 룰렛 카드 UI를 포함한 데모 페이지입니다.', sectionId: 'minigame' },
  { path: '/games/brand-games', title: '브랜드 게임', eyebrow: 'BRAND GAME', description: '브랜드 게임 및 크리에이터 영역을 표현하는 정적 페이지입니다.', sectionId: 'brand-games' },
  { path: '/sportsbook', title: '스포츠북', eyebrow: 'SPORTSBOOK', description: '스포츠북 메뉴 클릭 시 깨지지 않도록 구성한 정적 페이지입니다.' },
  { path: '/tournament', title: '슬롯 토너먼트', eyebrow: 'TOURNAMENT', description: '토너먼트 메뉴용 프론트엔드 전용 레이아웃입니다.' },
  { path: '/events', title: '이벤트', eyebrow: 'EVENT', description: '이벤트 공지 카드와 안내 레이아웃입니다.' },
  { path: '/tv', title: '띵벳 TV', eyebrow: 'TTINGBET TV', description: '라이브 중계 영역의 정적 프리뷰 페이지입니다.' },
  { path: '/mypage', title: '마이페이지', eyebrow: 'ACCOUNT', description: '로그인이 필요한 메뉴입니다. 데모에서는 로그인 모달만 표시합니다.', cta: '로그인 열기' },
  { path: '/support', title: '고객센터', eyebrow: 'SUPPORT', description: '고객센터 페이지용 정적 레이아웃입니다.' },
  { path: '/faq', title: '자주 물어보는 질문', eyebrow: 'FAQ', description: 'FAQ 항목을 보여주는 데모 페이지입니다.' },
  { path: '/rules', title: '이용규정', eyebrow: 'RULES', description: '이용규정 페이지 레이아웃입니다. 법적/운영 정책은 실제 서비스에 맞게 별도 작성해야 합니다.' },
  { path: '/domain', title: '도메인', eyebrow: 'DOMAIN', description: '도메인 안내 페이지의 정적 프론트엔드입니다.' },
  { path: '/telegram', title: '텔레그램', eyebrow: 'TELEGRAM', description: '텔레그램 메뉴용 정적 안내 페이지입니다.' }
]

export const footerLinks = [
  { label: '홈', to: '/' },
  { label: '스포츠 배팅', to: '/games/sports' },
  { label: '라이브 카지노', to: '/games/casino' },
  { label: '슬롯', to: '/games/slots' },
  { label: 'E스포츠', to: '/games/esports' },
  { label: '미니게임', to: '/games/minigame' },
  { label: '파칭코', to: '/games/pachinko' },
  { label: '브랜드 게임', to: '/games/brand-games' },
  { label: 'BJ크리에이터', to: '/games/brand-games?type=creator' },
  { label: '스포츠북', to: '/sportsbook' },
  { label: '슬롯 토너먼트', to: '/tournament' },
  { label: '이벤트', to: '/events' },
  { label: 'FAQ', to: '/faq' },
  { label: '이용규정', to: '/rules' }
]

export function getSectionById(id?: string) {
  return gameSections.find((section) => section.id === id)
}

export function getPageByPath(path: string) {
  return routePages.find((page) => page.path === path)
}
