import axios from 'axios';
import { getAPIErrorMessage } from '@/helpers/common';
import { NEXT_PUBLIC_API_URL } from '@/helpers/environment';
import { messageStore } from '@/stores/messageStore';

const token = process.env.NEXT_PUBLIC_CREATE_TICKET_VIA_WEB_API_KEY;

/**
 * @desc Add ticket via web
 * @param {*} payload
 * {
 * "senderName": "senderName",
 * "senderEmail": "senderEmail",
 * "message": "Web ticket with attachments test",
 * "attachments": [
 *      {
 *          "filename": "apple.png",
 *          "url": "file url link"
 *      }
 *   ]
 * }
 */
export const createTicketViaWeb = async (payload: object) => {
  try {
    const response = await axios.post(
      `${NEXT_PUBLIC_API_URL}/tickets`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const { data } = response;
    return data;
  } catch (err: any) {
    messageStore.setErrorMessage(
      getAPIErrorMessage(err) || 'Something went wrong!',
    );
    return null;
  }
};
