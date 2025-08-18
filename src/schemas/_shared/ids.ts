import { z } from "zod";

export const Id = z.string().cuid();
export const IdArray = z.array(Id).nonempty();
