import {
  ArrowRight,
  Gift,
  HeartHandshake,
  LockKeyhole,
  PartyPopper,
  RefreshCw,
  Sparkles,
} from "lucide-react"
import { useId, useState } from "react"

const imagePath = (name) =>
  import.meta.env.PROD
    ? `https://breezelife.github.io/Project-MiniSophia/images/${name}`
    : `/images/${name}`

const privilegeCards = [
  {
    id: "tiny-willful",
    title: "任性一次券",
    label: "今天可以任性一次",
    image: imagePath("childrens-day-note.jpg"),
    accent: "from-sunshine/85 via-tangerine/35 to-white",
    mark: "01",
  },
  {
    id: "no-reason",
    title: "不讲道理券",
    label: "今天可以不讲道理一次",
    image: imagePath("sushi-portrait.jpg"),
    accent: "from-sky/65 via-white to-blush/45",
    mark: "02",
  },
  {
    id: "hug",
    title: "点名抱抱券",
    label: "今天可以点名要抱抱一次",
    image: imagePath("dinner-together.jpg"),
    accent: "from-blush/80 via-white to-berry/20",
    mark: "03",
  },
  {
    id: "pause-work",
    title: "十分钟放空券",
    label: "今天可以把工作先放一边 10 分钟",
    image: imagePath("memory-warm.jpg"),
    accent: "from-mint/65 via-white to-sky/35",
    mark: "04",
  },
  {
    id: "favorite",
    title: "无条件偏爱券",
    label: "今天可以被我无条件偏爱",
    image: imagePath("kitchen-together.jpg"),
    accent: "from-berry/40 via-white to-sunshine/55",
    mark: "05",
  },
]

const floaters = [
  { symbol: "♡", left: "6%", delay: "0s", duration: "12s", size: "1.3rem", drift: "32px", color: "#e65f83" },
  { symbol: "✦", left: "16%", delay: "3s", duration: "13s", size: "1rem", drift: "-22px", color: "#f58a4b" },
  { symbol: "✧", left: "28%", delay: "1s", duration: "14s", size: "1rem", drift: "18px", color: "#78c8df" },
  { symbol: "♡", left: "42%", delay: "5s", duration: "12s", size: "0.95rem", drift: "-28px", color: "#8b5158" },
  { symbol: "•", left: "58%", delay: "2s", duration: "15s", size: "1.5rem", drift: "24px", color: "#ffd36a" },
  { symbol: "✦", left: "70%", delay: "7s", duration: "13s", size: "0.95rem", drift: "-18px", color: "#9acb88" },
  { symbol: "♡", left: "84%", delay: "4s", duration: "11s", size: "1.25rem", drift: "22px", color: "#e65f83" },
  { symbol: "✧", left: "94%", delay: "8s", duration: "14s", size: "0.95rem", drift: "-24px", color: "#78c8df" },
]

const burst = [
  { left: "9%", delay: "0ms", color: "#ffd36a", rotate: "-16deg" },
  { left: "17%", delay: "70ms", color: "#e65f83", rotate: "18deg" },
  { left: "29%", delay: "25ms", color: "#78c8df", rotate: "-8deg" },
  { left: "41%", delay: "115ms", color: "#9acb88", rotate: "22deg" },
  { left: "52%", delay: "45ms", color: "#f58a4b", rotate: "-20deg" },
  { left: "65%", delay: "90ms", color: "#ffd36a", rotate: "14deg" },
  { left: "76%", delay: "10ms", color: "#e65f83", rotate: "-14deg" },
  { left: "88%", delay: "130ms", color: "#78c8df", rotate: "20deg" },
]

function FloatingMarks() {
  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden" aria-hidden="true">
      {floaters.map((item, index) => (
        <span
          className="floating-mark"
          key={`${item.symbol}-${index}`}
          style={{
            "--left": item.left,
            "--delay": item.delay,
            "--duration": item.duration,
            "--size": item.size,
            "--drift": item.drift,
            "--mark-color": item.color,
          }}
        >
          {item.symbol}
        </span>
      ))}
    </div>
  )
}

function SophiaLogo({ compact = false }) {
  const gradientId = `${useId().replaceAll(":", "")}-sophia-gradient`

  return (
    <div
      className={`sophia-logo ${compact ? "sophia-logo-compact" : ""}`}
      aria-label="Sophia 专属小表情 logo"
    >
      <svg className="sophia-mark" viewBox="0 0 72 72" role="img" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="12" x2="60" y1="10" y2="64">
            <stop offset="0%" stopColor="#fff7dc" />
            <stop offset="48%" stopColor="#ffd36a" />
            <stop offset="100%" stopColor="#f6d9d7" />
          </linearGradient>
        </defs>
        <circle cx="36" cy="36" r="30" fill={`url(#${gradientId})`} />
        <circle cx="36" cy="36" r="29" fill="none" stroke="rgba(139,81,88,0.2)" />
        <text className="sophia-letter" x="18" y="45">
          S
        </text>
        <circle className="sophia-eye sophia-eye-left" cx="43" cy="31" r="2.15" />
        <circle className="sophia-eye sophia-eye-right" cx="52" cy="31" r="2.15" />
        <path className="sophia-smile" d="M43 41.5c3 3.2 7.4 3.2 10.4 0" />
        <path className="sophia-cheek" d="M49.5 49.5c2.8 1.4 6 .5 7.4-2.2" />
        <path className="sophia-spark" d="M54 13l1.7 4.1 4.3 1.3-4.1 1.8-1.5 4.2-1.7-4.1-4.3-1.4 4.1-1.7z" />
      </svg>
      <span className="sophia-logo-copy">
        <strong>Sophia</strong>
        {!compact && <small>今日专属小朋友</small>}
      </span>
    </div>
  )
}

function PasswordGate({ onUnlock }) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    if (password === "0529") {
      setError("")
      onUnlock()
      return
    }

    setError("密码不对，再想想我们的小日期。")
    setPassword("")
  }

  return (
    <main className="password-gate min-h-screen overflow-hidden px-5 py-8 text-ink sm:px-10">
      <FloatingMarks />
      <section className="password-panel relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-5xl items-center overflow-hidden rounded-[8px] border border-white/80 bg-white/[0.68] shadow-soft backdrop-blur">
        <img
          src={imagePath("childrens-day-note.jpg")}
          alt=""
          className="password-photo absolute inset-0 h-full w-full object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,253,251,0.94),rgba(255,248,242,0.82),rgba(255,255,255,0.72))]" />

        <div className="relative z-10 grid w-full gap-10 p-7 sm:p-12 md:grid-cols-[0.9fr_1.1fr] md:items-center lg:p-16">
          <div className="space-y-7">
            <SophiaLogo />
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-rosewood">
                To Sophia
              </p>
              <h1 className="text-5xl font-semibold leading-[1.02] text-ink sm:text-7xl">
                26年的
                <br />
                儿童节
              </h1>
              <p className="max-w-md text-xl font-medium leading-relaxed text-cocoa">
                这是一个只给你打开的小网站。
              </p>
            </div>
          </div>

          <form className="password-card space-y-5 rounded-[8px] border border-blush/70 bg-white/[0.72] p-5 shadow-soft backdrop-blur sm:p-7" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-rosewood">
                <LockKeyhole className="h-4 w-4" aria-hidden="true" />
                输入暗号
              </p>
              <label className="sr-only" htmlFor="password">
                密码
              </label>
              <input
                id="password"
                autoFocus
                className="password-input h-14 w-full rounded-[8px] border border-blush/80 bg-porcelain px-4 text-center text-2xl font-semibold tracking-[0.45em] text-ink outline-none transition focus:border-rosewood focus:ring-4 focus:ring-blush/45"
                inputMode="numeric"
                maxLength={4}
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value.replace(/\D/g, "").slice(0, 4))
                  setError("")
                }}
                placeholder="••••"
              />
            </div>

            {error && <p className="text-sm font-semibold text-berry">{error}</p>}

            <button
              type="submit"
              className="action-button action-button-primary inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold"
            >
              打开给 Sophia 的礼物
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

function App() {
  const [unlocked, setUnlocked] = useState(false)
  const [claimed, setClaimed] = useState(false)
  const [drawCount, setDrawCount] = useState(0)
  const [drawnCard, setDrawnCard] = useState(null)
  const [ownedCardIds, setOwnedCardIds] = useState([])

  const scrollToPrivileges = () => {
    document.getElementById("privileges")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  const drawPrivilege = () => {
    if (claimed) {
      setClaimed(false)
    }

    const unopenedCards = privilegeCards.filter((card) => !ownedCardIds.includes(card.id))
    const pool = unopenedCards.length > 0 ? unopenedCards : privilegeCards
    const nextCard = pool[Math.floor(Math.random() * pool.length)]

    setDrawnCard(nextCard)
    setDrawCount((count) => count + 1)
    setOwnedCardIds((ids) => (ids.includes(nextCard.id) ? ids : [...ids, nextCard.id]))
  }

  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />
  }

  return (
    <main className="min-h-screen overflow-hidden bg-cream text-ink">
      <FloatingMarks />

      <section className="relative isolate flex min-h-[94svh] items-end overflow-hidden px-5 pb-12 pt-8 sm:min-h-screen sm:items-center sm:px-10 lg:px-16">
        <img
          src={imagePath("sushi-portrait.jpg")}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[46%_26%] opacity-45 sm:opacity-35"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,211,106,0.38),transparent_30%),radial-gradient(circle_at_82%_22%,rgba(120,200,223,0.25),transparent_26%),linear-gradient(180deg,rgba(255,253,251,0.58)_0%,rgba(255,248,242,0.76)_45%,rgba(255,248,242,0.96)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cream to-transparent" />
        <div className="absolute left-5 top-5 z-10 sm:left-10 sm:top-8">
          <SophiaLogo />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-5xl">
          <p className="reveal mb-5 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/[0.58] px-4 py-2 text-sm text-cocoa backdrop-blur-md">
            <Sparkles className="sparkle-pop h-4 w-4 text-tangerine" aria-hidden="true" />
            今天你可以不用当大人
          </p>
          <p className="reveal reveal-delay-1 mb-3 text-lg text-cocoa sm:text-xl">
            今天是 2026 年 6 月 1 日
          </p>
          <h1 className="reveal reveal-delay-2 max-w-3xl text-6xl font-semibold leading-[0.96] text-ink sm:text-8xl lg:text-[8.5rem]">
            也是你的
            <br />
            专属儿童节
          </h1>
          <p className="reveal reveal-delay-3 mt-7 max-w-xl text-[1.35rem] leading-relaxed text-cocoa sm:text-3xl">
            平时你很厉害，今天你只需要自在做自己。
          </p>
          <button
            type="button"
            onClick={scrollToPrivileges}
            className="reveal reveal-delay-4 action-button action-button-primary mt-9 inline-flex min-h-14 items-center justify-center gap-2 rounded-full px-7 py-3 text-base font-semibold sm:px-8"
          >
            <Gift className="h-5 w-5" aria-hidden="true" />
            开始领取今日特权
          </button>
        </div>
      </section>

      <section className="relative px-5 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="absolute left-6 top-8 h-20 w-20 rounded-full bg-sunshine/30 blur-2xl sm:left-20" />
        <div className="absolute right-3 top-1/3 h-24 w-24 rounded-full bg-sky/20 blur-2xl" />
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1.05fr_0.85fr] md:items-center">
          <div className="space-y-7">
            <p className="text-sm font-medium text-rosewood">给今天的你</p>
            <div className="space-y-6 text-[1.55rem] font-medium leading-[1.55] text-ink sm:text-4xl sm:leading-[1.45]">
              <p>这几天刚陪你在一起，今天我刚离开，你又去上班了。</p>
              <p>所以我想留一个小小的网站在这里，陪你过完今天。</p>
              <p>不是很贵重的礼物，但它只属于你。</p>
            </div>
          </div>

          <figure className="photo-frame overflow-hidden rounded-[8px] border border-white/80 bg-white/35 shadow-soft">
            <img
              src={imagePath("kitchen-together.jpg")}
              alt="一起在厨房的合照"
              className="aspect-[4/5] h-full w-full object-cover object-[36%_50%] md:aspect-[3/4]"
            />
          </figure>
        </div>
      </section>

      <section id="privileges" className="relative bg-white/[0.64] px-5 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-2xl">
          <div className="relative overflow-hidden rounded-[8px] border border-blush/70 bg-porcelain/90 p-6 shadow-soft backdrop-blur sm:p-9">
            {claimed && (
              <div className="claim-burst" aria-hidden="true">
                {burst.map((piece, index) => (
                  <span
                    key={index}
                    style={{
                      "--burst-left": piece.left,
                      "--burst-delay": piece.delay,
                      "--burst-color": piece.color,
                      "--burst-rotate": piece.rotate,
                    }}
                  />
                ))}
              </div>
            )}
            <div className="mb-7 flex items-center gap-3">
              <span className="gift-bob grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sunshine/[0.45] text-rosewood">
                <Gift className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-3xl font-semibold text-ink sm:text-5xl">今日小朋友特权</h2>
                <p className="mt-2 text-sm font-medium text-rosewood sm:text-base">
                  5 张卡，嘴上说只抽一张。只有一次机会哦。
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-center">
              <div className="card-stage">
                {drawnCard ? (
                  <article
                    key={`${drawnCard.id}-${drawCount}`}
                    className={`draw-card bg-gradient-to-br ${drawnCard.accent}`}
                  >
                    <div className="flex items-center justify-between px-4 pt-4 text-sm font-semibold text-rosewood">
                      <SophiaLogo compact />
                      <span>{drawnCard.mark}/05</span>
                    </div>
                    <img src={drawnCard.image} alt="" className="mt-4 h-52 w-full object-cover" />
                    <div className="space-y-3 p-5">
                      <p className="text-sm font-semibold text-tangerine">
                        {drawCount === 1 ? "抽到了这张" : "又抽到了这张"}
                      </p>
                      <h3 className="text-3xl font-semibold leading-tight text-ink">
                        {drawnCard.title}
                      </h3>
                      <p className="text-xl font-medium leading-relaxed text-cocoa">
                        {drawnCard.label}
                      </p>
                    </div>
                  </article>
                ) : (
                  <div className="card-back">
                    <SophiaLogo compact />
                    <span className="text-sm font-semibold text-rosewood">5 张卡都在这里</span>
                    <strong className="mt-4 block text-4xl font-semibold leading-tight text-ink">
                      抽取今日
                      <br />
                      小朋友特权
                    </strong>
                    <span className="mt-5 inline-flex rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-tangerine">
                      只有一次机会哦
                    </span>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <p className="rounded-[8px] border border-white/80 bg-white/[0.68] px-4 py-4 text-lg font-medium leading-relaxed text-cocoa">
                  {drawCount === 0 &&
                    "今天不让你做选择题。闭眼抽一张，抽到哪张，我都认。"}
                  {drawCount === 1 &&
                    "好吧，给你再给你一次机会，最后一次机会哦。"}
                  {drawCount >= 2 &&
                    ownedCardIds.length < privilegeCards.length &&
                    "说是最后一次，其实还可以继续抽。抽到过的每一张，都算数。"}
                  {ownedCardIds.length === privilegeCards.length &&
                    "5 张都被你抽到过了。今天你全部拥有，还想抽也可以。"}
                </p>

                <div className="grid gap-3">
                  <button
                    type="button"
                    onClick={drawPrivilege}
                    className="action-button action-button-primary inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold"
                  >
                    {drawCount === 0 ? (
                      <Sparkles className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <RefreshCw className="h-5 w-5" aria-hidden="true" />
                    )}
                    {drawCount === 0 && "抽取今日特权"}
                    {drawCount === 1 && "再给一次机会"}
                    {drawCount >= 2 && "继续抽卡"}
                  </button>

                  {drawnCard && (
                    <button
                      type="button"
                      aria-pressed={claimed}
                      disabled={claimed}
                      onClick={() => setClaimed(true)}
                      className={`action-button inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold ${
                        claimed ? "action-button-confirmed" : "action-button-secondary"
                      }`}
                    >
                      {claimed ? (
                        <PartyPopper className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <HeartHandshake className="h-5 w-5" aria-hidden="true" />
                      )}
                      {claimed ? "已领取" : "我领取了"}
                    </button>
                  )}
                </div>

                {ownedCardIds.length > 0 && (
                  <p className="text-center text-sm font-semibold text-rosewood">
                    已拥有 {ownedCardIds.length}/5 张。抽到过的，都算她的。
                  </p>
                )}
              </div>
            </div>

            {claimed && (
              <p
                className="claim-note mt-6 rounded-[8px] border border-sunshine/70 bg-sunshine/20 px-4 py-3 text-base font-medium leading-relaxed text-rosewood sm:text-lg"
                role="status"
              >
                已生效。有效期：今天，以及以后每一天。
                <br />
                今日抽中：{drawnCard?.label}
                <br />
                目前已拥有：{ownedCardIds.length}/5 张。
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="final-section relative overflow-hidden px-5 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_12%,rgba(255,211,106,0.45),transparent_29%),radial-gradient(circle_at_88%_18%,rgba(120,200,223,0.28),transparent_30%),radial-gradient(circle_at_70%_86%,rgba(230,95,131,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,248,242,1))]" />
        <div className="mx-auto grid max-w-5xl gap-11 md:grid-cols-[1.02fr_0.88fr] md:items-center">
          <div className="space-y-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/[0.55] px-4 py-2 text-sm font-medium text-rosewood backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-tangerine" aria-hidden="true" />
              最后，把今天收好
            </p>
            <h2 className="text-5xl font-semibold leading-[1.08] text-ink sm:text-7xl">
              我喜欢的不是你像小朋友。
            </h2>
            <p className="text-[1.45rem] font-medium leading-[1.6] text-cocoa sm:text-4xl sm:leading-[1.45]">
              是你明明很成熟、很努力、很厉害，
              <br className="hidden sm:block" />
              但在我这里，依然可以不用那么坚强。
            </p>
            <p className="rounded-[8px] border border-white/80 bg-white/[0.58] px-5 py-4 text-xl font-semibold leading-relaxed text-rosewood shadow-soft backdrop-blur sm:text-2xl">
              所以今天的最后一个任务：
              <br />
              开心一点，被爱多一点。
            </p>
          </div>

          <figure className="final-photo-card overflow-hidden rounded-[8px] border border-white/80 bg-white/[0.55] p-2 shadow-soft backdrop-blur">
            <img
              src={imagePath("childrens-day-note.jpg")}
              alt="儿童节快乐的留言和小摆件"
              className="h-[31rem] w-full rounded-[6px] object-cover object-[50%_42%] sm:h-[38rem] md:h-[34rem]"
            />
            <figcaption className="px-3 py-4 text-base font-semibold text-cocoa">
              2026.06.01 · 专属儿童节已存档
            </figcaption>
          </figure>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-3 sm:grid-cols-3">
          <img
            src={imagePath("memory-warm.jpg")}
            alt="夜晚花旁的她"
            className="memory-tile h-44 w-full rounded-[8px] object-cover object-[48%_42%] shadow-soft sm:h-56"
          />
          <img
            src={imagePath("dinner-together.jpg")}
            alt="一起吃饭的合照"
            className="memory-tile h-44 w-full rounded-[8px] object-cover object-[38%_48%] shadow-soft sm:h-56"
          />
          <img
            src={imagePath("kitchen-solo.jpg")}
            alt="她在厨房做饭"
            className="memory-tile h-44 w-full rounded-[8px] object-cover object-[28%_48%] shadow-soft sm:h-56"
          />
        </div>
      </section>
    </main>
  )
}

export default App
