import type { NextApiRequest, NextApiResponse } from 'next'
import knex from "../db/connection"
import { badRequest, noReply, ok } from '../utils/communication-utils'
import { createGiftListValidator } from '../validators';

export const createGiftList = (req: NextApiRequest, res: NextApiResponse) => {
  const validate = createGiftListValidator.safeParse(req.body)
  console.log(validate);

  if (!validate.success) {
    return badRequest(res, 'Invalid data');
  }
  const { username, family_id, user_id } = req.body;

  try {
    knex('gift_list')
      .insert({ username, family_id, user_id });
  } catch (error) {
    console.log(error);
    return badRequest(res, "Bad request");
  }

  noReply(res);
}

export const listGiftList = (req: NextApiRequest, res: NextApiResponse) => {
  const { familyId } =  req.query;
  if (!familyId) {
    return badRequest(res);
  }
  try {
    const data =  knex.select('id', 'username')
      .from('gift_list')
      .where('family_id', +familyId);
    ok(res, data)
  } catch (error) {
    console.log(error);
    return badRequest(res, "Bad request");
  }

}

export const deleteGiftList = (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.body;
  try {
    knex('gift_list')
  .where({ id })
  .del()
  } catch (error) {
    console.log(error);
    return badRequest(res, "Bad request");
  }

}