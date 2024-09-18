import { defineCollection, z } from 'astro:content';

const cvCollection = defineCollection({
  type: 'data',
  schema: z.object({
    basics: z.object({
      name: z.string(),
      label: z.string(),
      image: z.string(),
      email: z.string(),
      phone: z.string(),
      summary: z.string(),
      location: z.object({
        address: z.string(),
        postalCode: z.string(),
        city: z.string(),
        countryCode: z.string(),
        region: z.string()
      }),
      profiles: z.array(z.object({
        network: z.string(),
        username: z.string(),
        url: z.string()
      }))  
    }),
    work: z.array(z.object({
      name: z.string(),
      position: z.string(),
      url: z.string().nullable(),
      startDate: z.string(),
      endDate: z.string().nullable(),
      summary: z.string(),
      highlights: z.array(z.string())
    })),
    volunteer: z.array(z.object({
      organization: z.string(),
      position: z.string(),
      url: z.string().nullable(),
      startDate: z.string(),
      endDate: z.string().nullable(),
      summary: z.string(),
      highlights: z.array(z.string())
    })),
    education: z.array(z.object({
      institution: z.string(),
      url: z.string().nullable(),
      area: z.string(),
      studyType: z.string(),
      startDate: z.string(),
      endDate: z.string().nullable(),
      score: z.string().nullable(),
      courses: z.array(z.string())
    })),
    awards: z.array(z.object({
      title: z.string(),
      date: z.string(),
      awarder: z.string(),
      summary: z.string()
    })),
    certificates: z.array(z.object({
      name: z.string(),
      date: z.string(),
      issuer: z.string(),
      url: z.string()
    })),
    publications: z.array(z.object({
      name: z.string(),
      publisher: z.string(),
      releaseDate: z.string(),
      url: z.string(),
      summary: z.string()
    })),
    skills: z.array(z.object({
      name: z.string(),
      level: z.string(),
      keywords: z.array(z.string())
    })),
    languages: z.array(z.object({
      language: z.string(),
      fluency: z.string()
    })),
    interests: z.array(z.object({
      name: z.string()
    })),
    references: z.array(z.object({
      name: z.string(),
      reference: z.string()
    })),
    projects: z.array(z.object({
      name: z.string(),
      description: z.string(),
      highlights: z.array(z.string()),
      startDate: z.string(),
      endDate: z.string().nullable(),
      url: z.string().nullable()
    }))
  })
});

export const collections = {
  'cv': cvCollection
};