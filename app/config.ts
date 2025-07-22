import { capitalizeSentence, fullName, initials } from "@/lib/utils";

export const FULLNAME = fullName(process.env.FIRSTNAME || 'John', process.env.LASTNAME || 'Doe');
export const INITIALS = initials(process.env.FIRSTNAME || 'John', process.env.LASTNAME || 'Doe');
export const TITLE = capitalizeSentence(process.env.TITLE || 'Full Time Employee');
