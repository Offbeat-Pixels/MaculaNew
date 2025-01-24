import { Mail, MapPin, Phone } from "lucide-react";

function ContactSection() {
  return (
    <section className="py-16 px-4 ">
      <div className="container mx-auto max-w-6xl">
        <h1 className="mb-12 text-center text-5xl font-bold">Contact Us</h1>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Phone Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-purple-50 p-8 transition-all hover:shadow-lg">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="rounded-full bg-purple-100 p-4 text-purple-600 transition-all group-hover:scale-110">
                <Phone className="h-6 w-6" />
              </div>
              <a
                href="tel:+911234567890"
                className="text-lg font-semibold text-gray-900 hover:text-purple-600"
              >
                +91 1234 567890
              </a>
            </div>
          </div>

          {/* Address Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-blue-50 p-8 transition-all hover:shadow-lg">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="rounded-full bg-blue-100 p-4 text-blue-600 transition-all group-hover:scale-110">
                <MapPin className="h-6 w-6" />
              </div>
              <address className="not-italic">
                <p className="text-lg font-semibold text-gray-900">
                  Dummy 1234 St.
                </p>
                <p className="text-gray-600">280001 Dehradun, Uttrakhand</p>
              </address>
            </div>
          </div>

          {/* Email Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-green-50 p-8 transition-all hover:shadow-lg">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="rounded-full bg-green-100 p-4 text-green-600 transition-all group-hover:scale-110">
                <Mail className="h-6 w-6" />
              </div>
              <a
                href="mailto:info@maculaconsultant.com"
                className="text-lg font-semibold text-gray-900 hover:text-green-600"
              >
                info@maculaconsultant.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;