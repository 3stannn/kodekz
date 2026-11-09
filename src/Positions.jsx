
const experiences = [
  {
    company: "AWS Learning Club - Genesis",
    initials: "LC",
    employment: "Organization Officer",
    location: "Tarlac State University",
    positions: [
      {
        title: "Tech Officer",
        date: "NOV 2026 - PRESENT · 1 month",
        description: [
          "Co-founded the AWS Learning Club – TSU Chapter, establishing the organization’s foundational community and student engagement.",
        ],
        skills: ["Cloud Computing", "AWS"],
        // extraSkills: 2,
      },
    ],
  },
  {
    company: "Programmers' Den",
    initials: "PD",
    employment: "Organization Officer",
    location: "Tarlac State University",
    positions: [
      {
        title: "Finance | Graphic Designer",
        date: "S.Y 2025 - 2026",
        description: [
          "Managed budget allocation, fund tracking, and financial documentation for organization initiatives while designing promotional graphics, publication materials, and visual branding for programming workshops and competitions.",
        ],
        skills: ["Graphic Design", "Budgeting", "Branding"],
      },
    ],
  },
  {
    company: "Junior Philippine Computer Society",
    initials: "JP",
    employment: "Organization Officer",
    location: "Tarlac State University",
    positions: [
      {
        title: "Graphic Designer",
        date: "S.Y 2024 - 2025",
        description: [
          "Created official publication materials, event banners, and social media collaterals for college-wide tech seminars, assemblies, and student campaigns, maintaining a consistent and engaging visual brand identity.",
        ],
        skills: ["Graphic Design", "Brand Identity", "Visual Design"],
      },
    ],
  },
];

function Positions() {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-8 text-neutral-900">

      {/* Experience timeline */}
      <div className="space-y-12">

        {experiences.map((company, index) => (
          <div key={company.company} className="relative flex gap-5">

            {/* Company logo and timeline */}
            <div className="relative flex w-12 shrink-0 justify-center">

              {/* Vertical company timeline */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-1/2 top-14 h-[calc(100%+3rem)] w-px -translate-x-1/2 bg-neutral-200" />
              )}

              {/* Company logo */}
              <div className="z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-200 bg-white text-xs font-medium text-neutral-700">
                {company.initials}
              </div>
            </div>

            {/* Company details */}
            <div className="min-w-0 flex-1">

              <h3 className="text-heavy normal">
                {company.company}
              </h3>

              <p className="mt-1 text">
                {company.employment}
              </p>

              {company.location && (
                <p className="mt-1 text small">
                  {company.location}
                </p>
              )}

              {/* Positions */}
              <div className="mt-6 space-y-8">
                {company.positions.map((position, i) => (
                  <div key={position.title} className="relative">

                    {/* Position timeline */}
                    <div className="absolute -left-6.25 top-1.5 h-2 w-2 rounded-full border border-neutral-300 bg-white" />

                    <h4 className="text-heavy">
                      {position.title}
                    </h4>

                    <p className="mt-2 text small">
                      {position.date}
                    </p>

                    {/* Description */}
                    <div className="mt-4 text">
                      {position.description.map((paragraph, j) => (
                        <p key={j}>{paragraph}</p>
                      ))}
                    </div>

                    {/* Skills */}
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {position.skills.slice(0, 2).map((skill) => (
                        <span
                          key={skill}
                          className="stack text small normal"
                        >
                          {skill}
                        </span>
                      ))}

                      {position.extraSkills > 0 && (
                        <span className="stack text small normal">
                          +{position.extraSkills} skills
                        </span>
                      )}

                      {position.skills.length > 2 &&
                        !position.extraSkills &&
                        position.skills.slice(2).map((skill) => (
                          <span
                            key={skill}
                            className="stack text small normal"
                          >
                            {skill}
                          </span>
                        ))}
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Positions;
