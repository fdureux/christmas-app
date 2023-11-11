import type { NextApiRequest, NextApiResponse } from 'next'
import { createGiftList, deleteGiftList, listGiftList } from '@/controllers/gift-lists';
import { methodNotAllowed } from '@/utils/communication-utils';

 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  switch (req.method) {
    case 'POST':
      createGiftList(req, res);
      break;
    case 'GET':
      listGiftList(req, res);
      break;
    case 'DELETE':
      deleteGiftList(req, res);
      break;
    default:
      methodNotAllowed(res);
  } 
}