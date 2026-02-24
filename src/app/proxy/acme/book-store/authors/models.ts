import type { EntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface AuthorDto extends EntityDto<string> {
  name?: string;
  birthDate?: string;
  shortBio?: string;
}

export interface CreateAuthorDto {
  name: string;
  birthDate: string;
  shortBio?: string | null;
}

export interface GetAuthorListDto extends PagedAndSortedResultRequestDto {
  filter?: string | null;
}

export interface UpdateAuthorDto {
  name: string;
  birthDate: string;
  shortBio?: string | null;
}
