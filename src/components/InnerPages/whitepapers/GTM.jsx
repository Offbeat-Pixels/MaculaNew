import { Play } from "lucide-react";

export default function GTM() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-4 py-16 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Main title */}
        <h1 className="mb-16 text-center text-4xl font-normal tracking-tight md:text-5xl lg:text-6xl">
          GTM+Sales
        </h1>

        <div className="relative grid gap-8 md:grid-cols-[1fr,auto] md:gap-12 lg:gap-16">
          <div className="space-y-8">
            {/* Subtitle */}
            <h2 className="text-2xl font-medium text-[#6B8E23] md:text-3xl lg:text-4xl">
              GTM + Sales
            </h2>

            {/* First paragraph - bold text */}
            <p className="text-lg font-semibold text-gray-900">
              We specialize in providing practical advice and hands-on support
              to businesses like yours.
            </p>

            {/* Second paragraph - regular text */}
            <p className="text-lg leading-relaxed text-gray-700">
              Our team has years of experience in various industries and brings
              together skills in strategy, operations, finance, and more. We
              believe that every business has the potential to thrive with the
              right tools and guidance.
            </p>

            {/* Additional paragraph */}
            <p className="text-lg leading-relaxed text-gray-700">
              We specialize in providing practical advice and hands-on support
              to businesses like yours. Our team has years of experience in
              various industries and brings together skills in strategy,
              operations, finance, and more. We believe that every business has
              the potential to thrive with the right tools and guidance.
            </p>
          </div>

          {/* Play button */}
          <div className="flex items-start justify-center md:sticky md:top-8">
            <button
              className="rounded-full bg-black p-4 text-white transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              aria-label="Play video"
            >
              <Play className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
