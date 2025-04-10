/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Brisbane'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  blocks: {};
  collections: {
    users: User;
    media: Media;
    pages: Page;
    'our-solutions': OurSolution;
    'practice-areas': PracticeArea;
    team: Team;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    pages: PagesSelect<false> | PagesSelect<true>;
    'our-solutions': OurSolutionsSelect<false> | OurSolutionsSelect<true>;
    'practice-areas': PracticeAreasSelect<false> | PracticeAreasSelect<true>;
    team: TeamSelect<false> | TeamSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {};
  globalsSelect: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  prefix?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: number;
  title: string;
  slug: string;
  layout?:
    | (
        | {
            heading: string;
            subheading: string;
            id?: string | null;
            blockName?: string | null;
            blockType: 'hero';
          }
        | {
            company_logos?:
              | {
                  logo: number | Media;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'logos-section';
          }
        | {
            heading: string;
            description: string;
            experience: number;
            clients: number;
            photos?:
              | {
                  about_photo: number | Media;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'hero-about';
          }
        | {
            heading: string;
            solutions?: (number | OurSolution)[] | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'services-block';
          }
        | {
            heading: string;
            description: string;
            listings?:
              | {
                  title: string;
                  content: string;
                  id?: string | null;
                }[]
              | null;
            experience: number;
            clients: number;
            why_us_photo: number | Media;
            id?: string | null;
            blockName?: string | null;
            blockType: 'why-choose-us';
          }
        | {
            title: string;
            description: string;
            id?: string | null;
            blockName?: string | null;
            blockType: 'cta-section';
          }
        | {
            solutions?: (number | OurSolution)[] | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'solutionblock';
          }
        | {
            heading: string;
            description: string;
            photo: number | Media;
            id?: string | null;
            blockName?: string | null;
            blockType: 'about';
          }
        | {
            mission: string;
            vision: string;
            id?: string | null;
            blockName?: string | null;
            blockType: 'goals';
          }
        | {
            team_profiles?: (number | Team)[] | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'ourTeam';
          }
        | {
            title: string;
            description: string;
            id?: string | null;
            blockName?: string | null;
            blockType: 'aboutCta';
          }
      )[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * Add Solution
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "our-solutions".
 */
export interface OurSolution {
  id: number;
  title: string;
  description: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * Add Team Member
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "team".
 */
export interface Team {
  id: number;
  name: string;
  slug: string;
  photo: number | Media;
  role: string;
  email: string;
  phone: string;
  linkedin?: string | null;
  twitter?: string | null;
  facebook?: string | null;
  instagram?: string | null;
  bio: string;
  experience: number;
  updatedAt: string;
  createdAt: string;
}
/**
 * Add Practice Area
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "practice-areas".
 */
export interface PracticeArea {
  id: number;
  title: string;
  slug: string;
  description: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'pages';
        value: number | Page;
      } | null)
    | ({
        relationTo: 'our-solutions';
        value: number | OurSolution;
      } | null)
    | ({
        relationTo: 'practice-areas';
        value: number | PracticeArea;
      } | null)
    | ({
        relationTo: 'team';
        value: number | Team;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  prefix?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages_select".
 */
export interface PagesSelect<T extends boolean = true> {
  title?: T;
  slug?: T;
  layout?:
    | T
    | {
        hero?:
          | T
          | {
              heading?: T;
              subheading?: T;
              id?: T;
              blockName?: T;
            };
        'logos-section'?:
          | T
          | {
              company_logos?:
                | T
                | {
                    logo?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        'hero-about'?:
          | T
          | {
              heading?: T;
              description?: T;
              experience?: T;
              clients?: T;
              photos?:
                | T
                | {
                    about_photo?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        'services-block'?:
          | T
          | {
              heading?: T;
              solutions?: T;
              id?: T;
              blockName?: T;
            };
        'why-choose-us'?:
          | T
          | {
              heading?: T;
              description?: T;
              listings?:
                | T
                | {
                    title?: T;
                    content?: T;
                    id?: T;
                  };
              experience?: T;
              clients?: T;
              why_us_photo?: T;
              id?: T;
              blockName?: T;
            };
        'cta-section'?:
          | T
          | {
              title?: T;
              description?: T;
              id?: T;
              blockName?: T;
            };
        solutionblock?:
          | T
          | {
              solutions?: T;
              id?: T;
              blockName?: T;
            };
        about?:
          | T
          | {
              heading?: T;
              description?: T;
              photo?: T;
              id?: T;
              blockName?: T;
            };
        goals?:
          | T
          | {
              mission?: T;
              vision?: T;
              id?: T;
              blockName?: T;
            };
        ourTeam?:
          | T
          | {
              team_profiles?: T;
              id?: T;
              blockName?: T;
            };
        aboutCta?:
          | T
          | {
              title?: T;
              description?: T;
              id?: T;
              blockName?: T;
            };
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "our-solutions_select".
 */
export interface OurSolutionsSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "practice-areas_select".
 */
export interface PracticeAreasSelect<T extends boolean = true> {
  title?: T;
  slug?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "team_select".
 */
export interface TeamSelect<T extends boolean = true> {
  name?: T;
  slug?: T;
  photo?: T;
  role?: T;
  email?: T;
  phone?: T;
  linkedin?: T;
  twitter?: T;
  facebook?: T;
  instagram?: T;
  bio?: T;
  experience?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}