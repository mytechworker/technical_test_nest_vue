import { get, post } from './_fetch';
import type { ApiSchema } from '@/types';
import type { HttpGetRoute, HttpPostRoute } from './_fetch';
import type { operations } from '@/types/schemas/api';
export type BrokerApplicationsListQueryDto = operations['BrokerApplicationsListController_find']['parameters']['query'];
export type BrokerApplicationsListResponseDto = ApiSchema['BrokerApplicationsListResponseDto'];

export type BrokerApplicationsPostDto = operations['BrokerApplicationsListController_find']['parameters']['payload']
export type BrokerApplicationsPostResponseDto = ApiSchema['BrokerApplicationsPostResponseDto'];

export type BrokerApplicationsDto = ApiSchema['BrokerApplicationsDto'];
export type BrokerApplicationsResponseDto = ApiSchema['BrokerApplicationsResponseDto'];

export default {
  list: async (query?: BrokerApplicationsListQueryDto): Promise<BrokerApplicationsListResponseDto> => {
    const data = await get<BrokerApplicationsListQueryDto, BrokerApplicationsListResponseDto>(
      <HttpGetRoute>'/brokers/applications/list-applications',
      query,
    );
    return data;
  },
  post: async (payload: BrokerApplicationsPostDto): Promise<BrokerApplicationsPostResponseDto> => {
    console.log(payload, '========')
    const data = await post<BrokerApplicationsPostDto, BrokerApplicationsPostDto, BrokerApplicationsPostResponseDto>(
      <HttpPostRoute>'/brokers/applications/create-applications',
      {},
      payload
    );
    return data;
  }

  // post: async (body: BrokerApplicationsDto): Promise<BrokerApplicationsResponseDto> => {
  //   const data = await post<undefined, BrokerApplicationsDto, BrokerApplicationsResponseDto>(
  //     <HttpPostRoute>'/brokers/tasks/submit-loan',
  //     undefined,
  //     body,
  //   );
  //   return data;
  // },
};
