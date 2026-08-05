"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { contactInfo } from "@/data/contact";

export default function ContactInfo() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">
          Get in Touch
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          I am always interested in discussing research opportunities,
          PhD positions, AI projects, and academic collaborations.
        </p>
      </div>

      {/* Email */}

      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-blue-100 p-3 dark:bg-blue-900/30">
          <Mail className="h-6 w-6 text-blue-600" />
        </div>

        <div>
          <p className="font-semibold">Email</p>

          <Link
            href={`mailto:${contactInfo.email}`}
            className="text-gray-600 hover:text-blue-600 dark:text-gray-300"
          >
            {contactInfo.email}
          </Link>
        </div>
      </div>

      {/* Location */}

      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-blue-100 p-3 dark:bg-blue-900/30">
          <MapPin className="h-6 w-6 text-blue-600" />
        </div>

        <div>
          <p className="font-semibold">Location</p>

          <p className="text-gray-600 dark:text-gray-300">
            {contactInfo.location}
          </p>
        </div>
      </div>

      {/* GitHub */}

      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-blue-100 p-3 dark:bg-blue-900/30">
          <FaGithub className="h-6 w-6 text-blue-600" />
        </div>

        <div>
          <p className="font-semibold">GitHub</p>

          <Link
            href={contactInfo.github}
            target="_blank"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-300"
          >
            View Profile
          </Link>
        </div>
      </div>

      {/* LinkedIn */}

      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-blue-100 p-3 dark:bg-blue-900/30">
          <FaLinkedin className="h-6 w-6 text-blue-600" />
        </div>

        <div>
          <p className="font-semibold">LinkedIn</p>

          <Link
            href={contactInfo.linkedin}
            target="_blank"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-300"
          >
            View Profile
          </Link>
        </div>
      </div>

      {/* Availability */}

      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/30">
        <h3 className="text-lg font-semibold">
          Current Availability
        </h3>

        <p className="mt-3 text-gray-600 dark:text-gray-300">
          {contactInfo.availability}
        </p>
      </div>
    </section>
  );
}