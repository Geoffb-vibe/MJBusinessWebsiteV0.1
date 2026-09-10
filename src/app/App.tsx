import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Menu, X, ArrowRight, ChevronDown, CheckCircle2,
  FileText, Zap, BarChart3, RefreshCw,
  Building2, GraduationCap, Home, Globe, Shield
} from "lucide-react";
import iconBlue from "../imports/MJ-Icon_Blue.svg";
import iconGreen from "../imports/MJ-Icon_Green.svg";
import heroImage from "../imports/GlobalFX.png";

// ─── Inline SVG logos (no external asset dependency) ─────────────────────────
function LogoMJBizWhite({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="434" height="68" viewBox="0 0 434 68" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Money Jar Business">
      <path d="M61 1C66.5228 1 71 5.47715 71 11V57C71 62.5228 66.5228 67 61 67H15C9.47715 67 5 62.5228 5 57V11C5 5.47715 9.47715 1 15 1H61ZM48.5791 30.5029C47.3122 30.5029 46.2842 31.5317 46.2842 32.7998V39.8262C46.2841 45.4673 41.6996 50.0556 36.0635 50.0557C30.4273 50.0557 25.8429 45.4674 25.8428 39.8262V33.2588C25.8426 31.9908 24.8147 30.9619 23.5479 30.9619C22.2811 30.962 21.254 31.9909 21.2539 33.2588V54.9727H36.7568C39.5155 54.9727 42.0898 54.173 44.2656 52.7988L55.4688 46.3252C56.5671 45.692 56.9428 44.2878 56.3086 43.1885C55.676 42.0909 54.2731 41.7131 53.1748 42.3477L52.4355 42.7734L56.0762 36.9873C56.7518 35.9138 56.4289 34.4969 55.3564 33.8203C54.2838 33.1437 52.8658 33.4664 52.1914 34.54L50.873 36.6357V32.7998C50.873 31.5319 49.8458 30.5032 48.5791 30.5029ZM36.0547 14C30.4012 14 25.801 18.6042 25.8008 24.2627C25.8008 29.9214 30.4011 34.5263 36.0547 34.5264C41.7083 34.5264 46.3086 29.9214 46.3086 24.2627C46.3084 18.6042 41.7082 14 36.0547 14ZM36.0547 18.5947C39.1776 18.5947 41.7175 21.137 41.7178 24.2627C41.7178 27.3886 39.1778 29.9316 36.0547 29.9316C32.9316 29.9316 30.3916 27.3885 30.3916 24.2627C30.3918 21.137 32.9318 18.5948 36.0547 18.5947Z" fill="#FEFEFE"/>
      <path d="M103.974 32.0288V45.4794H109.276V22.4033H104.927L97.1877 33.1827L89.3484 22.4033H85V45.4794H90.3359V32.0625L96.2323 39.9748H98.1094L103.972 32.0304L103.974 32.0288ZM112.272 33.9413C112.272 26.5241 117.476 21.9404 124.458 21.9404C131.44 21.9404 136.644 26.5225 136.644 33.9413C136.644 41.3602 131.44 45.9407 124.458 45.9407C117.476 45.9407 112.272 41.3586 112.272 33.9413ZM117.838 33.9413C117.838 38.2261 120.736 40.8973 124.458 40.8973C128.18 40.8973 131.079 38.194 131.079 33.9413C131.079 29.6887 128.18 26.9854 124.458 26.9854C120.736 26.9854 117.838 29.6887 117.838 33.9413ZM154.989 35.8523L144.219 22.4017H139.675V45.4778H145.01V32.0272L155.78 45.4778H160.292V22.4033H154.99V35.8539L154.989 35.8523ZM169.678 35.9841H178.834V31.1384H169.678V27.4467H179.427V22.4033H164.276V45.4794H179.921V40.436H169.678V35.9857V35.9841ZM203.009 22.4033H196.981L191.744 31.2059L186.608 22.4033H180.448L189.044 36.1496V45.4794H194.445V36.1496L203.009 22.4033ZM217.059 37.3566C217.059 40.1258 215.609 41.0162 213.666 41.0162H211.789V46.0596H214.49C218.705 46.0596 222.461 43.9831 222.461 38.3451V22.9835H217.059V37.3566ZM238.962 22.9835L247.986 46.0596H241.892L240.179 41.1802H232.011L230.265 46.0596H224.534L233.558 22.9835H238.96H238.962ZM238.599 36.6639L236.129 29.6083L233.594 36.6639H238.601H238.599ZM263.927 36.8279L269.823 46.058H263.763L258.79 37.5865H256.55V46.058H251.148V22.9835H260.436C265.442 22.9835 269.131 25.1259 269.131 30.1371C269.131 33.8288 267.056 35.9712 263.927 36.8295V36.8279ZM263.498 30.4007C263.498 28.6215 262.048 28.0269 260.073 28.0269H256.548V32.8067H260.139C262.082 32.8067 263.498 32.2136 263.498 30.4007Z" fill="#FEFEFE"/>
      <path d="M413.794 43.9231V41.5165H414.123C416.068 43.0659 418.178 43.989 420.717 43.989C424.211 43.989 426.057 42.2747 426.057 39.9011C426.057 37.8901 424.739 36.4066 423.057 35.6813L419.068 33.8681C416.068 32.5495 414.288 30.4396 414.288 27.5055C414.288 23.6484 417.354 22 421.145 22C423.519 22 425.431 22.6264 426.98 23.5495V25.989H426.651C424.607 24.6044 422.926 24.011 421.046 24.011C418.277 24.011 416.563 25.2967 416.563 27.5385C416.563 29.6484 418.178 31.033 420.156 31.9231L424.079 33.6374C427.079 34.989 428.299 37.3297 428.299 39.8681C428.299 43.989 425.299 46 420.75 46C417.552 46 415.442 45.044 413.794 43.9231Z" fill="#FEFEFE"/>
      <path d="M396.15 43.9231V41.5165H396.479C398.424 43.0659 400.534 43.989 403.073 43.989C406.567 43.989 408.413 42.2747 408.413 39.9011C408.413 37.8901 407.095 36.4066 405.413 35.6813L401.424 33.8681C398.424 32.5495 396.644 30.4396 396.644 27.5055C396.644 23.6484 399.71 22 403.501 22C405.875 22 407.787 22.6264 409.336 23.5495V25.989H409.007C406.963 24.6044 405.281 24.011 403.402 24.011C400.633 24.011 398.919 25.2967 398.919 27.5385C398.919 29.6484 400.534 31.033 402.512 31.9231L406.435 33.6374C409.435 34.989 410.655 37.3297 410.655 39.8681C410.655 43.989 407.655 46 403.106 46C399.908 46 397.798 45.044 396.15 43.9231Z" fill="#FEFEFE"/>
      <path d="M381.72 43.4615H392.896V45.5385H379.544V22.4615H392.369V24.5385H381.72V32.1538H391.742V34.1978H381.72V43.4615Z" fill="#FEFEFE"/>
      <path d="M370.908 22.4615H373.084V45.5385H371.501L356.897 26.8132V45.5385H354.721V22.4615H356.304L370.908 41.1868V22.4615Z" fill="#FEFEFE"/>
      <path d="M346.091 22.4615H348.267V45.5385H346.091V22.4615Z" fill="#FEFEFE"/>
      <path d="M326.7 43.9231V41.5165H327.03C328.975 43.0659 331.085 43.989 333.623 43.989C337.118 43.989 338.964 42.2747 338.964 39.9011C338.964 37.8901 337.645 36.4066 335.964 35.6813L331.975 33.8681C328.975 32.5495 327.195 30.4396 327.195 27.5055C327.195 23.6484 330.261 22 334.052 22C336.425 22 338.337 22.6264 339.887 23.5495V25.989H339.557C337.513 24.6044 335.832 24.011 333.953 24.011C331.184 24.011 329.469 25.2967 329.469 27.5385C329.469 29.6484 331.085 31.033 333.063 31.9231L336.986 33.6374C339.986 34.989 341.206 37.3297 341.206 39.8681C341.206 43.989 338.206 46 333.656 46C330.458 46 328.348 45.044 326.7 43.9231Z" fill="#FEFEFE"/>
      <path d="M304.938 36.8681V22.4615H307.114V36.6703C307.114 41.9121 309.85 43.989 313.608 43.989C317.333 43.989 320.07 41.9121 320.07 36.6703V22.4615H322.245V36.8681C322.245 43.0659 318.685 46 313.608 46C308.531 46 304.938 43.0659 304.938 36.8681Z" fill="#FEFEFE"/>
      <path d="M295.197 33.2418C298.493 33.967 300.142 36.0439 300.142 39.2088C300.142 43.1319 297.636 45.5385 292.361 45.5385H283.823V22.4615H291.504C296.153 22.4615 298.625 24.7363 298.625 28.2637C298.625 30.4725 297.669 32.3516 295.197 33.2418ZM296.35 28.5934C296.35 26.1538 294.768 24.5385 291.241 24.5385H285.999V32.6154H291.241C294.768 32.6154 296.35 30.9011 296.35 28.5934ZM292.098 43.4615C296.12 43.4615 297.9 41.9121 297.9 39.0769C297.9 36.2418 296.12 34.6593 292.098 34.6593H285.999V43.4615H292.098Z" fill="#FEFEFE"/>
    </svg>
  );
}

function LogoMJBizBlue({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="424" height="68" viewBox="0 0 424 68" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Money Jar Business">
      <rect y="1" width="66" height="66" rx="10" fill="#243638"/>
      <path d="M16.2534 33.259C16.2534 31.9909 17.2811 30.9623 18.548 30.9623C19.815 30.9623 20.8427 31.9909 20.8427 33.259V39.826C20.8427 45.4673 25.4271 50.0558 31.0633 50.0558C36.6996 50.0558 41.284 45.4673 41.284 39.826C41.284 39.8212 41.284 39.818 41.284 39.8132V32.7994C41.284 31.5313 42.3117 30.5027 43.5786 30.5027C44.8456 30.5027 45.8733 31.5313 45.8733 32.7994V36.6357L47.1916 34.54C47.866 33.4664 49.2839 33.1433 50.3565 33.8199C51.4292 34.4966 51.752 35.9141 51.0759 36.9877L47.4357 42.7736L48.1743 42.3477C49.2727 41.7129 50.6761 42.0906 51.3088 43.1883C51.943 44.2876 51.5673 45.6923 50.4689 46.3255L39.2656 52.7993C37.0898 54.1735 34.5157 54.9722 31.757 54.9722H16.2534V33.259Z" fill="#30DFBF"/>
      <path d="M31.0547 14C25.4011 14 20.8008 18.6044 20.8008 24.2631C20.8008 29.9218 25.4011 34.5262 31.0547 34.5262C36.7084 34.5262 41.3087 29.9218 41.3087 24.2631C41.3087 18.6044 36.7084 14 31.0547 14ZM31.0547 29.9315C27.9317 29.9315 25.3915 27.389 25.3915 24.2631C25.3915 21.1373 27.9317 18.5948 31.0547 18.5948C34.1778 18.5948 36.718 21.1373 36.718 24.2631C36.718 27.389 34.1778 29.9315 31.0547 29.9315Z" fill="#30DFBF"/>
      <path d="M14.2376 53.0228H14V53.7235H14.2376V53.5001H14.8944V53.2462H14.2376V53.0228Z" fill="#30DFBF"/>
      <path d="M14 52.1163L14.3854 52.3912L14 52.6708V52.8845H14.8944V52.6354H14.4335L14.7033 52.4329V52.351L14.4319 52.1517H14.8944V51.9026H14V52.1163Z" fill="#30DFBF"/>
      <path d="M98.9737 32.0288V45.4794H104.276V22.4033H99.9275L92.1877 33.1827L84.3484 22.4033H80V45.4794H85.3359V32.0625L91.2323 39.9748H93.1094L98.9721 32.0304L98.9737 32.0288ZM107.272 33.9413C107.272 26.5241 112.476 21.9404 119.458 21.9404C126.44 21.9404 131.644 26.5225 131.644 33.9413C131.644 41.3602 126.44 45.9407 119.458 45.9407C112.476 45.9407 107.272 41.3586 107.272 33.9413ZM112.838 33.9413C112.838 38.2261 115.736 40.8973 119.458 40.8973C123.18 40.8973 126.079 38.194 126.079 33.9413C126.079 29.6887 123.18 26.9854 119.458 26.9854C115.736 26.9854 112.838 29.6887 112.838 33.9413ZM149.989 35.8523L139.219 22.4017H134.675V45.4778H140.01V32.0272L150.78 45.4778H155.292V22.4033H149.99V35.8539L149.989 35.8523ZM164.678 35.9841H173.834V31.1384H164.678V27.4467H174.427V22.4033H159.276V45.4794H174.921V40.436H164.678V35.9857V35.9841ZM198.009 22.4033H191.981L186.744 31.2059L181.608 22.4033H175.448L184.044 36.1496V45.4794H189.445V36.1496L198.009 22.4033ZM212.059 37.3566C212.059 40.1258 210.609 41.0162 208.666 41.0162H206.789V46.0596H209.49C213.705 46.0596 217.461 43.9831 217.461 38.3451V22.9835H212.059V37.3566ZM233.962 22.9835L242.986 46.0596H236.892L235.179 41.1802H227.011L225.265 46.0596H219.534L228.558 22.9835H233.96H233.962ZM233.599 36.6639L231.129 29.6083L228.594 36.6639H233.601H233.599ZM258.927 36.8279L264.823 46.058H258.763L253.79 37.5865H251.55V46.058H246.148V22.9835H255.436C260.442 22.9835 264.131 25.1259 264.131 30.1371C264.131 33.8288 262.056 35.9712 258.927 36.8295V36.8279ZM258.498 30.4007C258.498 28.6215 257.048 28.0269 255.073 28.0269H251.548V32.8067H255.139C257.082 32.8067 258.498 32.2136 258.498 30.4007Z" fill="#243638"/>
      <path d="M408.794 43.9231V41.5165H409.123C411.068 43.0659 413.178 43.989 415.717 43.989C419.211 43.989 421.057 42.2747 421.057 39.9011C421.057 37.8901 419.739 36.4066 418.057 35.6813L414.068 33.8681C411.068 32.5494 409.288 30.4396 409.288 27.5055C409.288 23.6484 412.354 22 416.145 22C418.519 22 420.431 22.6264 421.98 23.5495V25.989H421.651C419.607 24.6044 417.925 24.011 416.046 24.011C413.277 24.011 411.563 25.2967 411.563 27.5385C411.563 29.6484 413.178 31.033 415.156 31.9231L419.079 33.6374C422.079 34.989 423.299 37.3297 423.299 39.8681C423.299 43.989 420.299 46 415.75 46C412.552 46 410.442 45.044 408.794 43.9231Z" fill="#243638"/>
      <path d="M391.15 43.9231V41.5165H391.479C393.424 43.0659 395.534 43.989 398.073 43.989C401.567 43.989 403.413 42.2747 403.413 39.9011C403.413 37.8901 402.095 36.4066 400.413 35.6813L396.424 33.8681C393.424 32.5494 391.644 30.4396 391.644 27.5055C391.644 23.6484 394.71 22 398.501 22C400.875 22 402.787 22.6264 404.336 23.5495V25.989H404.007C401.963 24.6044 400.281 24.011 398.402 24.011C395.633 24.011 393.919 25.2967 393.919 27.5385C393.919 29.6484 395.534 31.033 397.512 31.9231L401.435 33.6374C404.435 34.989 405.655 37.3297 405.655 39.8681C405.655 43.989 402.655 46 398.106 46C394.908 46 392.798 45.044 391.15 43.9231Z" fill="#243638"/>
      <path d="M376.72 43.4615H387.896V45.5385H374.544V22.4615H387.369V24.5385H376.72V32.1538H386.742V34.1978H376.72V43.4615Z" fill="#243638"/>
      <path d="M365.908 22.4615H368.084V45.5385H366.501L351.897 26.8132V45.5385H349.721V22.4615H351.304L365.908 41.1868V22.4615Z" fill="#243638"/>
      <path d="M341.091 22.4615H343.267V45.5385H341.091V22.4615Z" fill="#243638"/>
      <path d="M321.7 43.9231V41.5165H322.03C323.975 43.0659 326.085 43.989 328.623 43.989C332.118 43.989 333.964 42.2747 333.964 39.9011C333.964 37.8901 332.645 36.4066 330.964 35.6813L326.975 33.8681C323.975 32.5494 322.195 30.4396 322.195 27.5055C322.195 23.6484 325.261 22 329.052 22C331.425 22 333.338 22.6264 334.887 23.5495V25.989H334.557C332.513 24.6044 330.832 24.011 328.953 24.011C326.184 24.011 324.469 25.2967 324.469 27.5385C324.469 29.6484 326.085 31.033 328.063 31.9231L331.986 33.6374C334.986 34.989 336.206 37.3297 336.206 39.8681C336.206 43.989 333.206 46 328.656 46C325.458 46 323.349 45.044 321.7 43.9231Z" fill="#243638"/>
      <path d="M299.938 36.8681V22.4615H302.114V36.6703C302.114 41.9121 304.85 43.989 308.608 43.989C312.333 43.989 315.07 41.9121 315.07 36.6703V22.4615H317.245V36.8681C317.245 43.0659 313.685 46 308.608 46C303.531 46 299.938 43.0659 299.938 36.8681Z" fill="#243638"/>
      <path d="M290.197 33.2418C293.493 33.967 295.142 36.0439 295.142 39.2088C295.142 43.1319 292.636 45.5385 287.361 45.5385H278.823V22.4615H286.504C291.153 22.4615 293.625 24.7363 293.625 28.2637C293.625 30.4725 292.669 32.3516 290.197 33.2418ZM291.35 28.5934C291.35 26.1538 289.768 24.5385 286.241 24.5385H280.999V32.6154H286.241C289.768 32.6154 291.35 30.9011 291.35 28.5934ZM287.098 43.4615C291.12 43.4615 292.9 41.9121 292.9 39.0769C292.9 36.2418 291.12 34.6593 287.098 34.6593H280.999V43.4615H287.098Z" fill="#243638"/>
    </svg>
  );
}

// ─── Fade-in wrapper ──────────────────────────────────────────────────────────
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Ghost hero flow card — translucent, overlaid on hero image ───────────────
function HeroFlowCard() {
  return (
    <div className="relative w-[252px] select-none" aria-hidden="true">
      {/* Barely-there ambient bloom */}
      <div className="absolute -inset-6 rounded-3xl bg-[#30DFBF]/5 blur-3xl pointer-events-none" />

      {/* Card — dark navy at ~65% opacity: readable over the dark image, visually recedes */}
      <div className="relative bg-[#243638]/65 backdrop-blur-xl rounded-2xl border border-white/10 p-5">

        {/* Live indicator */}
        <div className="flex items-center gap-2 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#30DFBF] animate-pulse flex-shrink-0" />
          <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">
            Payment flow
          </span>
        </div>

        {/* BRL row */}
        <div className="mb-1">
          <div className="text-[11px] text-white/45 mb-1">Customer pays</div>
          <div className="flex items-center gap-2.5">
            <span className="text-lg leading-none">🇧🇷</span>
            <span className="text-xl font-bold text-white tracking-tight">R$&nbsp;8.760</span>
            <span className="ml-auto text-[10px] font-bold text-[#30DFBF] bg-[#30DFBF]/12 px-2 py-0.5 rounded-full border border-[#30DFBF]/20">
              BRL
            </span>
          </div>
        </div>

        {/* Animated flow connector */}
        <div className="flex items-center gap-2 my-3.5">
          <div className="flex-1 h-px bg-white/10" />
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full bg-[#30DFBF]/55"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.28 }}
            />
          ))}
          <span className="text-[10px] font-semibold text-[#30DFBF] whitespace-nowrap">
            Money Jar
          </span>
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full bg-[#30DFBF]/55"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.4, repeat: Infinity, delay: 0.7 + i * 0.28 }}
            />
          ))}
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* EUR row */}
        <div className="mb-4">
          <div className="text-[11px] text-[#83ECD9]/70 mb-1">Business receives</div>
          <div className="flex items-center gap-2.5">
            <span className="text-lg leading-none">🇮🇪</span>
            <span className="text-xl font-bold text-[#30DFBF] tracking-tight">€&nbsp;1,500</span>
            <span className="ml-auto text-[10px] font-bold text-[#30DFBF] bg-[#30DFBF]/12 px-2 py-0.5 rounded-full border border-[#30DFBF]/20">
              EUR
            </span>
          </div>
        </div>

        {/* Rate footer — decorative, meets AA at these sizes over dark card */}
        <div className="pt-3 border-t border-white/8 flex justify-between text-[10px] text-white/35">
          <span>R$5.84 / EUR</span>
          <span>Fee ≤ 2.5%</span>
        </div>
      </div>
    </div>
  );
}

// ─── Reusable contact form ────────────────────────────────────────────────────
function ContactForm({ id, variant = "light" }: { id: string; variant?: "light" | "floating" }) {
  const isFloating = variant === "floating";

  const field = isFloating
    ? "w-full px-4 py-3 rounded-xl border-2 border-white/30 bg-white text-[#243638] text-sm placeholder:text-[#9BAAAA] focus:outline-none focus:ring-2 focus:ring-[#30DFBF] focus:border-[#30DFBF] transition-all shadow-sm shadow-black/10"
    : "w-full px-4 py-3 rounded-xl border border-[#EAEBEA] bg-white text-[#243638] text-sm placeholder:text-[#A4A8A7] focus:outline-none focus:ring-2 focus:ring-[#30DFBF] focus:border-transparent transition-all";

  const lbl = isFloating
    ? "block text-xs font-semibold text-white/90 mb-1.5 tracking-wide"
    : "block text-xs font-semibold text-[#646867] mb-1.5";

  return (
    <form
      id={id}
      onSubmit={(e) => e.preventDefault()}
      className="space-y-3"
      aria-label="Request access"
      noValidate
    >
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor={`${id}-first`} className={lbl}>First name</label>
          <input id={`${id}-first`} type="text" autoComplete="given-name" placeholder="Jane" required className={field} />
        </div>
        <div>
          <label htmlFor={`${id}-last`} className={lbl}>Surname</label>
          <input id={`${id}-last`} type="text" autoComplete="family-name" placeholder="Smith" required className={field} />
        </div>
      </div>
      <div>
        <label htmlFor={`${id}-biz`} className={lbl}>Business name</label>
        <input id={`${id}-biz`} type="text" autoComplete="organization" placeholder="Your organisation" required className={field} />
      </div>
      <div>
        <label htmlFor={`${id}-email`} className={lbl}>Email address</label>
        <input id={`${id}-email`} type="email" autoComplete="email" placeholder="jane@business.com" required className={field} />
      </div>
      <div>
        <label htmlFor={`${id}-phone`} className={lbl}>Phone number</label>
        <input id={`${id}-phone`} type="tel" autoComplete="tel" placeholder="+353 ..." className={field} />
      </div>
      <button
        type="submit"
        className="w-full mt-1 py-3.5 bg-[#30DFBF] text-[#0F3C34] font-bold text-sm rounded-xl hover:bg-[#83ECD9] transition-all hover:shadow-lg hover:shadow-[#30DFBF]/20 focus-visible:outline-2 focus-visible:outline-white"
      >
        Request Access →
      </button>
    </form>
  );
}

// ─── Flow connector arrow ─────────────────────────────────────────────────────
function FlowArrow() {
  return (
    <div className="flex items-center justify-center text-[#30DFBF] opacity-60 mx-2">
      <ArrowRight className="w-5 h-5" />
    </div>
  );
}

// ─── Status badge ─────────────────────────────────────────────────────────────
function StatusBadge({ status }: { status: "Paid" | "Pending" | "Transferred" }) {
  const map = {
    Paid: "bg-[#D6F9F3] text-[#13594C]",
    Pending: "bg-[#E1FCFE] text-[#334D4F]",
    Transferred: "bg-[#EAEBEA] text-[#646867]",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${map[status]}`}>
      {status}
    </span>
  );
}

// ─── FAQ item ─────────────────────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#EAEBEA]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 focus-visible:outline-2 focus-visible:outline-[#30DFBF] rounded"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-[#242C2B]">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-[#A4A8A7]" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-[#646867] leading-relaxed">{a}</p>
      </motion.div>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "How it works", href: "#benefits" },
    { label: "Solutions", href: "#solutions" },
    { label: "Why Money Jar", href: "#why" },
    { label: "Rates", href: "#rates" },
    { label: "FAQ", href: "#faq" },
  ];

  const benefits = [
    {
      num: "01",
      icon: <Zap className="w-6 h-6" />,
      title: "Simple to use",
      subtitle: "Create a payment request in minutes.",
      body: "We request payments without asking your customers to navigate complicated international payment processes.",
    },
    {
      num: "02",
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Fast",
      subtitle: "Move money without the usual delays.",
      body: "Once payment is received, Money Jar converts the funds and transfers EUR to your designated business account. Target: Next business day.",
    },
    {
      num: "03",
      icon: <Shield className="w-6 h-6" />,
      title: "Competitive rates",
      subtitle: "Your customer pays less.",
      body: "Customers pay in Brazilian Real while your business receives Euros. Fees are negotiable upto 2.5% under the agreed service terms.",
    },
    {
      num: "04",
      icon: <FileText className="w-6 h-6" />,
      title: "Invoicing",
      subtitle: "Make payment administration easier.",
      body: "Money Jar can manage authorised invoice information, payment instructions and invoice communications on your behalf.",
    },
    {
      num: "05",
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Reporting",
      subtitle: "Know what's been paid and what's next.",
      body: "Keep track of payment requests, payments received and transfers through a clear, straightforward view.",
    },
  ];

  const industries = [
    {
      icon: <GraduationCap className="w-7 h-7" />,
      title: "Language Schools",
      body: "Make paying for courses easier for international students.",
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "Student Relocation",
      body: "Simplify payments for relocation services and student packages.",
    },
    {
      icon: <Home className="w-7 h-7" />,
      title: "Accommodation",
      body: "Make deposits and accommodation payments easier to collect.",
    },
    {
      icon: <Building2 className="w-7 h-7" />,
      title: "Other Businesses",
      body: "If your customers are in Brazil and you need to receive EUR, we can help.",
    },
  ];

  const trustPillars = [
    {
      title: "Clear",
      body: "Know what your customer needs to pay and what your business will receive.",
    },
    {
      title: "Straightforward",
      body: "One simple process from payment request through to EUR transfer.",
    },
    {
      title: "Supported",
      body: "Money Jar manages the whole payments process, from corrections, disputes and reconciliation.",
    },
    {
      title: "Business-focused",
      body: "Money Jar acts on behalf of your business under the agreed commercial agency arrangement.",
    },
  ];

  const transactions = [
    { name: "Ana Silva", requested: "€1,500", status: "Paid" as const, received: "€1,500" },
    { name: "João Costa", requested: "€2,400", status: "Pending" as const, received: "—" },
    { name: "Maria Santos", requested: "€850", status: "Transferred" as const, received: "€850" },
    { name: "Lucas Oliveira", requested: "€3,200", status: "Paid" as const, received: "€3,200" },
  ];

  const faqs = [
    {
      q: "Who is Money Jar Business for?",
      a: "Businesses in Europe that regularly receive payments from customers in Brazil.",
    },
    {
      q: "What does my customer pay?",
      a: "Your customer pays in Brazilian Real via the government run digital payment system Pix, according to the payment instructions provided by Money Jar and requested from for accounts team.",
    },
    {
      q: "What currency do I receive?",
      a: "Your business receives EUR into its designated business account.",
    },
    {
      q: "Does my business need a Brazilian bank account?",
      a: "No. Money Jar manages the agreed payment and currency conversion process on your behalf.",
    },
    {
      q: "How quickly do I receive my money?",
      a: "Money Jar targets transferring EUR by the next business day after receiving payment, subject to the applicable process and checks.",
    },
    {
      q: "How much does it cost?",
      a: "There is no cost to your business! The Money Jar fee is included as part of the payment process paid by your customer, and cannot exceed 2.5% under the agreed service terms.",
    },
    {
      q: "Can Money Jar manage invoices?",
      a: "Yes. Within the agreed authority, Money Jar can manage invoice information, payment instructions and related communications on your behalf.",
    },
    {
      q: "Which countries are supported?",
      a: "The service currently supports payments from Brazil to businesses in Ireland, with further European destinations planned.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FEFEFE] text-[#242C2B]" style={{ fontFamily: "Inter, sans-serif" }}>

      {/* ── Navigation ─────────────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:px-6 md:py-4">
        <nav
          className={`max-w-[1280px] mx-auto flex items-center justify-between px-5 md:px-8 h-16 rounded-2xl transition-all duration-300 ${
            scrolled
              ? "bg-white/92 backdrop-blur-2xl shadow-lg shadow-black/8 border border-[#EAEBEA]"
              : "bg-white/10 backdrop-blur-md border border-white/20"
          }`}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a href="#" aria-label="Money Jar Business">
            {scrolled
              ? <LogoMJBizBlue className="h-7 md:h-8 w-auto transition-all duration-300" />
              : <LogoMJBizWhite className="h-7 md:h-8 w-auto transition-all duration-300" />
            }
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-[#30DFBF] rounded ${
                  scrolled
                    ? "text-[#646867] hover:text-[#243638]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Single nav CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#hero-form"
              className={`group inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl transition-all focus-visible:outline-2 focus-visible:outline-[#30DFBF] ${
                scrolled
                  ? "bg-[#243638] text-white hover:bg-[#334D4F]"
                  : "bg-[#30DFBF] text-[#0F3C34] hover:bg-[#83ECD9]"
              }`}
            >
              Request Access
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className={`md:hidden p-2 rounded-xl focus-visible:outline-2 focus-visible:outline-[#30DFBF] transition-colors ${
              scrolled ? "text-[#646867] hover:bg-[#F8F8F9]" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 max-w-[1280px] mx-auto bg-white rounded-2xl border border-[#EAEBEA] shadow-xl p-5 space-y-1"
          >
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-[#646867] hover:text-[#243638] hover:bg-[#F8F8F9] rounded-xl transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-3 mt-3 border-t border-[#EAEBEA]">
              <a
                href="#hero-form"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center py-3.5 text-sm font-bold text-[#0F3C34] bg-[#30DFBF] rounded-xl"
              >
                Request Access
              </a>
            </div>
          </motion.div>
        )}
      </header>

      {/* ── Hero — full-bleed image ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Gradient overlay — dark left, fading right to let globe breathe */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(10,24,26,0.93) 0%, rgba(10,24,26,0.82) 38%, rgba(10,24,26,0.45) 62%, rgba(10,24,26,0.15) 100%)",
          }}
        />
        {/* Subtle bottom fade to white (next section) */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: "linear-gradient(to bottom, transparent, rgba(10,24,26,0.6))",
          }}
        />

        <div className="relative w-full max-w-[1280px] mx-auto px-6 md:px-10 pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* ── Left: copy ── */}
            <div className="lg:col-span-7 xl:col-span-6">

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#30DFBF]/40 bg-[#30DFBF]/10 text-[#30DFBF] text-xs font-semibold tracking-widest uppercase mb-7"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#30DFBF] animate-pulse flex-shrink-0" />
                Brazil → Ireland
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-bold tracking-tight text-white mb-6 leading-[1.06]"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
              >
                Cross boarder payment services.{" "}
                <span className="text-[#30DFBF] whitespace-nowrap">Welcome to easy</span>{" "}
                <span className="whitespace-nowrap">business invoicing.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-white/70 leading-relaxed mb-10 max-w-[480px]"
              >
                Make it easier for customers in Brazil to pay your business.
                Money Jar manages the exchange and transfer — they pay in Real,
                you receive Euros.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.3 }}
                className="mb-10"
              >
                <a
                  href="#benefits"
                  className="inline-flex items-center gap-2 border border-white/25 text-white font-semibold px-6 py-3.5 rounded-xl hover:border-white/50 hover:bg-white/8 transition-all focus-visible:outline-2 focus-visible:outline-white text-sm"
                >
                  See how it works
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/50"
              >
                {["Simple payment collection", "Competitive rates", "Clear reporting"].map((item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#30DFBF]" />
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* ── Right: floating lead gen form ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 xl:col-span-5 xl:col-start-8 flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-[400px]">
                {/* Thin teal rule as visual anchor above the form */}
                <div className="w-8 h-px bg-[#30DFBF] mb-5" />
                <div className="mb-5">
                  <h2 className="text-xl font-bold text-white mb-1.5 leading-snug">Request Access</h2>
                  <p className="text-sm text-white/55 leading-snug">
                    Tell us about your business and we'll be in touch.
                  </p>
                </div>
                <ContactForm id="hero-form" variant="floating" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Payment flow strip ─────────────────────────────────────────────── */}
      <section className="border-y border-[#EAEBEA] bg-[#F8F8F9] py-6 md:py-8">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          {/* Three-column flow — stacks on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4 md:gap-0">

            {/* BRL node */}
            <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-2">
              <div className="flex items-center gap-2">
                <span className="w-9 h-9 rounded-xl bg-[#D6F9F3] flex items-center justify-center text-lg flex-shrink-0">🇧🇷</span>
                <span className="text-xs font-semibold text-[#A4A8A7] uppercase tracking-wider">Customer pays</span>
              </div>
              <div>
                <div className="text-xl font-bold text-[#243638] tracking-tight leading-none">R$&nbsp;8.760</div>
                <div className="text-xs text-[#A4A8A7] mt-0.5">Brazilian Real</div>
              </div>
            </div>

            {/* Animated dots connector */}
            <div className="hidden md:flex justify-center items-center px-6 gap-1.5">
              {[0, 0.18, 0.36].map((delay, i) => (
                <motion.span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-[#30DFBF] block"
                  animate={{ opacity: [0.15, 1, 0.15] }}
                  transition={{ duration: 1.4, repeat: Infinity, delay, ease: "easeInOut" }}
                />
              ))}
            </div>

            {/* MJ converts node */}
            <div className="flex md:flex-col items-center gap-3 md:gap-2 md:text-center">
              <div className="flex items-center gap-2 md:justify-center">
                <span className="w-9 h-9 rounded-xl bg-[#30DFBF]/15 flex items-center justify-center flex-shrink-0">
                  <img src={iconGreen} alt="" className="w-5 h-5 object-contain" aria-hidden="true" />
                </span>
                <span className="text-xs font-semibold text-[#A4A8A7] uppercase tracking-wider">Money Jar converts</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-[#243638]">BRL → EUR</div>
                <div className="text-xs text-[#A4A8A7] mt-0.5">Rate: R$5.84 · Fee&nbsp;≤&nbsp;2.5%</div>
              </div>
            </div>

            {/* Animated dots connector */}
            <div className="hidden md:flex justify-center items-center px-6 gap-1.5">
              {[0.54, 0.72, 0.9].map((delay, i) => (
                <motion.span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-[#30DFBF] block"
                  animate={{ opacity: [0.15, 1, 0.15] }}
                  transition={{ duration: 1.4, repeat: Infinity, delay, ease: "easeInOut" }}
                />
              ))}
            </div>

            {/* EUR node */}
            <div className="flex md:flex-col items-center md:items-end gap-3 md:gap-2 md:text-right">
              <div className="flex items-center gap-2 md:flex-row-reverse">
                <span className="w-9 h-9 rounded-xl bg-[#E1FCFE] flex items-center justify-center text-lg flex-shrink-0">🇮🇪</span>
                <span className="text-xs font-semibold text-[#A4A8A7] uppercase tracking-wider">Business receives</span>
              </div>
              <div>
                <div className="text-xl font-bold text-[#30DFBF] tracking-tight leading-none" style={{color:"#278271"}}>€&nbsp;1,500</div>
                <div className="text-xs text-[#A4A8A7] mt-0.5">Euro · transferred to your account</div>
              </div>
            </div>
          </div>

        
        </div>
      </section>

      {/* ── Key Benefits ───────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36" id="benefits">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <FadeIn className="max-w-[520px] mb-16">
            <h2 className="text-[2rem] md:text-[2.75rem] font-bold leading-tight text-[#243638]">
              We make collecting payments simpler.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <FadeIn key={b.num} delay={i * 0.07}>
                <div className="group bg-white rounded-2xl border border-[#EAEBEA] p-7 h-full hover:border-[#30DFBF]/40 hover:shadow-lg hover:shadow-[#30DFBF]/8 hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                  <div className="mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#D6F9F3] text-[#278271] flex items-center justify-center group-hover:bg-[#30DFBF]/20 transition-colors">
                      {b.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#243638] mb-1">{b.title}</h3>
                  <p className="text-sm font-semibold text-[#5B9195] mb-3">{b.subtitle}</p>
                  <p className="text-sm text-[#646867] leading-relaxed">{b.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries / Solutions ─────────────────────────────────────────── */}
      <section className="py-24 md:py-36 bg-[#F8F8F9]" id="solutions">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <FadeIn className="max-w-[480px] mb-16">
            <h2 className="text-[2rem] md:text-[2.75rem] font-bold leading-tight text-[#243638]">
              Built for businesses with customers in Brazil.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {industries.map((ind, i) => (
              <FadeIn key={ind.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl border border-[#EAEBEA] p-7 h-full hover:shadow-lg hover:border-[#BEEEF1] hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-[#E1FCFE] text-[#5B9195] flex items-center justify-center mb-5">
                    {ind.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#243638] mb-2">{ind.title}</h3>
                  <p className="text-sm text-[#646867] leading-relaxed">{ind.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="text-center">
              <a
                href="#hero-form"
                className="group inline-flex items-center gap-2 border border-[#243638] text-[#243638] font-semibold px-7 py-4 rounded-xl hover:bg-[#243638] hover:text-white transition-all focus-visible:outline-2 focus-visible:outline-[#30DFBF]"
              >
                Request Access
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Why Money Jar ─────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 bg-[#243638]" id="why">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <FadeIn className="max-w-[480px] mb-16">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#30DFBF] mb-5">
              Why Money Jar
            </div>
            <h2 className="text-[2rem] md:text-[2.75rem] font-bold leading-tight text-white">
              A simpler way to manage international payments.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {trustPillars.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.08}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-colors cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-[#30DFBF]/15 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-5 h-5 text-[#30DFBF]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-[#7EC1C6] leading-relaxed">{p.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Commercial Agent / Transparency ───────────────────────────────── */}
      {/* Pale blue (Blue Shade 100 #E1FCFE) — distinct from white/off-white alternation,
          trust-forward, all text passes WCAG AA */}
      <section className="py-24 md:py-36 bg-[#E1FCFE]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              {/* #13594C on #E1FCFE → 7.3:1 ✓ */}
              <div className="text-xs font-semibold uppercase tracking-widest text-[#13594C] mb-5">
                Commercial agency
              </div>
              {/* #243638 on #E1FCFE → ~16:1 ✓ */}
              <h2 className="text-[2rem] md:text-[2.75rem] font-bold leading-tight text-[#243638] mb-6">
                Money Jar works on your behalf.
              </h2>
              {/* #334D4F on #E1FCFE → 7.7:1 ✓ */}
              <p className="text-[#334D4F] leading-relaxed text-lg mb-8">
                When you use Money Jar, you appoint us as your commercial agent
                to manage agreed payment and invoice activities on your behalf.
              </p>
              {/* #49696B on #E1FCFE → 5.2:1 ✓ */}
              <p className="text-[#49696B] text-sm leading-relaxed">
                Money Jar acts exclusively on behalf of the business using the
                service and in its interests.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-white rounded-2xl border border-[#BEEEF1] p-8 shadow-sm">
                {/* #13594C on white → 7.3:1 ✓ */}
                <div className="text-sm font-semibold text-[#13594C] mb-5">We can help manage:</div>
                <div className="space-y-3">
                  {[
                    "Invoice information",
                    "Payment instructions",
                    "Customer payment requests",
                    "Foreign-currency payments",
                    "Currency exchange into EUR",
                    "Transfers to your designated account",
                    "Transaction records",
                    "Corrections, disputes and reconciliation",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 py-2.5 border-b border-[#BEEEF1] last:border-0"
                    >
                      {/* Icon — decorative, #278271 on white → 4.2:1 meets 3:1 non-text ✓ */}
                      <CheckCircle2 className="w-4 h-4 text-[#278271] flex-shrink-0" />
                      {/* #334D4F on white → 8.3:1 ✓ */}
                      <span className="text-[#334D4F] text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Rates ─────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36" id="rates">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-[2rem] md:text-[2.75rem] font-bold leading-tight text-[#243638] mb-5">
                Clear rates. No surprises.
              </h2>
              <p className="text-lg text-[#646867] leading-relaxed mb-6">
                Your customer knows what they need to pay, and your business
                knows exactly what EUR amount is being collected.
              </p>
              <p className="text-sm text-[#A4A8A7] bg-[#F8F8F9] rounded-xl p-4 border border-[#EAEBEA]">
                Money Jar fee cannot exceed 2.5% under the agreed service terms, and can even be negotiated lower.
                The example shown is illustrative.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-white rounded-2xl border border-[#EAEBEA] shadow-xl shadow-[#243638]/6 overflow-hidden">
                <div className="p-7 border-b border-[#EAEBEA]">
                  <div className="text-xs font-semibold text-[#A4A8A7] uppercase tracking-widest mb-3">
                    Customer pays
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🇧🇷</span>
                    <span className="text-3xl font-bold text-[#243638] tracking-tight">R$ 8.760,00</span>
                  </div>
                  <div className="mt-2 text-sm text-[#A4A8A7]">Brazilian Real</div>
                </div>

                <div className="bg-[#F8F8F9] px-7 py-4 flex items-center gap-3 border-b border-[#EAEBEA]">
                  <div className="w-8 h-8 rounded-full bg-[#30DFBF]/20 flex items-center justify-center flex-shrink-0">
                    <img src={iconGreen} alt="" className="w-4 h-4 object-contain" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-[#243638]">Money Jar converts BRL → EUR</div>
                    <div className="flex gap-4 mt-1 text-xs text-[#A4A8A7]">
                      <span>Rate: R$5.84 / EUR</span>
                      <span>·</span>
                      <span>Fee: ≤ 2.5%</span>
                    </div>
                  </div>
                </div>

                <div className="p-7">
                  <div className="text-xs font-semibold text-[#278271] uppercase tracking-widest mb-3">
                    Business receives
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🇮🇪</span>
                    <span className="text-3xl font-bold text-[#243638] tracking-tight">€1,500.00</span>
                  </div>
                  <div className="mt-2 text-sm text-[#A4A8A7]">Euro — transferred to your account</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Dashboard Preview ──────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 bg-[#F8F8F9]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl border border-[#EAEBEA] shadow-xl shadow-[#243638]/6 overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b border-[#EAEBEA] bg-[#F8F8F9]">
                  <div className="flex items-center gap-2">
                    <img src={iconBlue} alt="" className="h-5 opacity-70" aria-hidden="true" />
                    <span className="text-sm font-semibold text-[#646867]">Money Jar Business</span>
                  </div>
                  <StatusBadge status="Paid" />
                </div>

                <div className="grid grid-cols-4 px-6 py-3 text-xs font-semibold text-[#A4A8A7] uppercase tracking-wider border-b border-[#EAEBEA]">
                  <span>Customer</span>
                  <span>Requested</span>
                  <span>Status</span>
                  <span className="text-right">EUR received</span>
                </div>

                {transactions.map((t, i) => (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="grid grid-cols-4 items-center px-6 py-4 border-b border-[#EAEBEA] last:border-0 hover:bg-[#F8F8F9] transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#E1FCFE] text-[#5B9195] flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {t.name.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-[#243638] truncate">{t.name}</span>
                    </div>
                    <span className="text-sm text-[#646867]">{t.requested}</span>
                    <StatusBadge status={t.status} />
                    <span className="text-sm font-semibold text-[#243638] text-right">{t.received}</span>
                  </motion.div>
                ))}

                <div className="px-6 py-4 bg-[#F8F8F9] flex items-center justify-between text-xs text-[#A4A8A7]">
                  <span>Showing 4 of 4 payments</span>
             
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15} className="order-1 lg:order-2">
              <h2 className="text-[2rem] md:text-[2.75rem] font-bold leading-tight text-[#243638] mb-5">
                Everything in one clear view.
              </h2>
              <p className="text-lg text-[#646867] leading-relaxed">
                Keep track of payment requests, payments and transfers without
                complicated spreadsheets or manual follow-up.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Expansion ─────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-[2rem] md:text-[2.75rem] font-bold leading-tight text-[#243638] mb-5">
                Starting in Ireland. Built for Europe.
              </h2>
              <p className="text-lg text-[#646867] leading-relaxed">
                Money Jar currently helps businesses in Ireland collect payments
                from customers in Brazil. As we expand, more European
                destinations will become available.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="flex flex-col items-center gap-1 max-w-xs mx-auto lg:mx-0">
                {[
                  { label: "BRAZIL", flag: "🇧🇷", badge: null, active: true },
                  { isDivider: true },
                  { label: "IRELAND", flag: "🇮🇪", badge: "Available now", active: true },
                  { isDivider: true },
                  { label: "EUROPE", flag: "🌍", badge: "Coming soon", active: false },
                ].map((item: any, i) => {
                  if (item.isDivider) {
                    return (
                      <div key={i} className="flex flex-col items-center py-2">
                        {[0, 1, 2].map((d) => (
                          <motion.div
                            key={d}
                            className="w-1.5 h-1.5 rounded-full my-1"
                            style={{ background: "#30DFBF" }}
                            animate={{ opacity: [0.2, 1, 0.2] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: d * 0.3 }}
                          />
                        ))}
                      </div>
                    );
                  }
                  return (
                    <div
                      key={i}
                      className={`w-full flex items-center gap-4 px-6 py-5 rounded-2xl border ${
                        item.active
                          ? "border-[#D6F9F3] bg-[#D6F9F3]/30"
                          : "border-[#EAEBEA] bg-white"
                      }`}
                    >
                      <span className="text-2xl">{item.flag}</span>
                      <span
                        className={`font-bold tracking-wide flex-1 ${
                          item.active ? "text-[#243638]" : "text-[#A4A8A7]"
                        }`}
                      >
                        {item.label}
                      </span>
                      {item.badge && (
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${
                            item.badge === "Available now"
                              ? "bg-[#30DFBF] text-[#0F3C34]"
                              : "bg-[#EAEBEA] text-[#A4A8A7]"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 bg-[#F8F8F9]" id="faq">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <FadeIn>
              <h2 className="text-[2rem] md:text-[2.5rem] font-bold leading-tight text-[#243638] mb-4">
                Common questions.
              </h2>
              <p className="text-[#646867] leading-relaxed">
                If you have a question that isn't answered here,
                we'd be happy to talk it through.
              </p>
              <a
                href="#hero-form"
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#243638] hover:text-[#30DFBF] transition-colors focus-visible:outline-2 focus-visible:outline-[#30DFBF] rounded"
              >
                Request Access <ArrowRight className="w-4 h-4" />
              </a>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-2">
              {faqs.map((f) => (
                <FAQItem key={f.q} q={f.q} a={f.a} />
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="relative py-28 md:py-40 bg-[#243638] overflow-hidden" id="contact">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(48,223,191,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

            {/* Left: copy */}
            <FadeIn>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#30DFBF] mb-6">
                Get started
              </div>
              <h2
                className="font-bold leading-tight text-white mb-6"
                style={{ fontSize: "clamp(1.85rem, 3.5vw, 2.75rem)" }}
              >
                Make it easier for your customers to pay you.
              </h2>
              <p className="text-[#7EC1C6] leading-relaxed text-lg mb-8">
                If your business regularly collects payments from customers
                in Brazil, request access and we'll be in touch.
              </p>
              <div className="space-y-3">
                {[
                  "Simple payment collection",
                  "Competitive rates — fee capped at 2.5%",
                  "Clear reporting and tracking",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-white/60">
                    <CheckCircle2 className="w-4 h-4 text-[#30DFBF] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#5B9195] mt-10">
                Brazil → Ireland today. More Europe coming soon.
              </p>
            </FadeIn>

            {/* Right: form */}
            <FadeIn delay={0.15}>
              <div className="w-full">
                <div className="w-8 h-px bg-[#30DFBF] mb-5" />
                <div className="mb-5">
                  <h3 className="text-xl font-bold text-white mb-1.5 leading-snug">Request Access</h3>
                  <p className="text-sm text-white/55 leading-snug">
                    We'll be in touch within one business day.
                  </p>
                </div>
                <ContactForm id="contact-form" variant="floating" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      {/* Neutral 900 #242C2B — near-black, not green, clearly distinct from white body.
          4px teal top border separates visually from the dark navy CTA above.
          All text uses solid palette colours that pass WCAG AA on this background. */}
      <footer className="bg-[#242C2B] border-t-4 border-[#30DFBF]/25 py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">

            {/* Brand */}
            <div className="col-span-2">
              <LogoMJBizWhite className="h-7 w-auto mb-4 opacity-90" />
              {/* #A4A8A7 on #242C2B → 5.4:1 ✓ */}
              <p className="text-sm text-[#A4A8A7] leading-relaxed max-w-xs">
                Money that moves organisations
              </p>
            </div>

            {/* Platform */}
            <div>
              {/* #A4A8A7 uppercase label → 5.4:1 ✓ */}
              <div className="text-xs font-semibold uppercase tracking-widest text-[#A4A8A7] mb-4">
                Platform
              </div>
              {/* #A4A8A7 links → 5.4:1 ✓ | hover #30DFBF → 7.9:1 ✓ */}
              <ul className="space-y-2.5 text-sm text-[#A4A8A7]">
                {[
                  { label: "How it works", href: "#benefits" },
                  { label: "Solutions", href: "#solutions" },
                  { label: "Rates", href: "#rates" },
                  { label: "FAQ", href: "#faq" },
                ].map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="hover:text-[#30DFBF] transition-colors focus-visible:outline-2 focus-visible:outline-[#30DFBF] rounded"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#A4A8A7] mb-4">
                Contact
              </div>
              <ul className="space-y-2.5 text-sm text-[#A4A8A7]">
                {["Request Access", "Login"].map((l) => (
                  <li key={l}>
                    <a
                      href="#contact"
                      className="hover:text-[#30DFBF] transition-colors focus-visible:outline-2 focus-visible:outline-[#30DFBF] rounded"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#A4A8A7] mb-4">
                Legal
              </div>
              <ul className="space-y-2.5 text-sm text-[#A4A8A7]">
                {["Terms", "Privacy", "Legal / Regulatory"].map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="hover:text-[#30DFBF] transition-colors focus-visible:outline-2 focus-visible:outline-[#30DFBF] rounded"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar — #A4A8A7 → 5.4:1 ✓ */}
          <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-[#A4A8A7]">
            <span>© Money Jar. All rights reserved.</span>
            <span>Money Jar Business is operated in Ireland. Regulated financial services.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
