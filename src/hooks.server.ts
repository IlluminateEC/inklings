import {paraglideMiddleware} from '$lib/paraglide/server';
import type {Handle} from '@sveltejs/kit';

// creating a handle to use the paraglide middleware
const paraglideHandle: Handle = ({event, resolve}) =>
    paraglideMiddleware(event.request, ({locale}) => {
      return resolve(
          event,
          {transformPageChunk: ({html}) => html.replace('%lang%', locale)});
    });

export const handle: Handle = paraglideHandle;