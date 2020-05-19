/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { SavedObjectsType } from 'kibana/server';

export const exceptionListSavedObjectType = 'exception-list';
export const exceptionListAgnosticSavedObjectType = 'exception-list-agnostic';
export type SavedObjectType = 'exception-list' | 'exception-list-agnostic';

/**
 * This is a super set of exception list and exception list items. The switch
 * to determine if you are using an exception list vs. an exception list item
 * is "list_type". If "list_type" is "list" then it is an exception list. If
 * "list_type" is "item" then the type is an item.
 */
export const commonMapping: SavedObjectsType['mappings'] = {
  properties: {
    _tags: {
      type: 'keyword',
    },
    created_at: {
      type: 'keyword',
    },
    created_by: {
      type: 'keyword',
    },
    description: {
      type: 'keyword',
    },
    list_id: {
      type: 'keyword',
    },
    list_type: {
      type: 'keyword',
    },
    meta: {
      type: 'keyword',
    },
    name: {
      type: 'keyword',
    },
    tags: {
      type: 'keyword',
    },
    tie_breaker_id: {
      type: 'keyword',
    },
    type: {
      type: 'keyword',
    },
    updated_by: {
      type: 'keyword',
    },
  },
};

export const exceptionListMapping: SavedObjectsType['mappings'] = {
  properties: {
    // There is nothing that is not also used within exceptionListItemMapping
    // at this time but if there is it should go here
  },
};

export const exceptionListItemMapping: SavedObjectsType['mappings'] = {
  properties: {
    comment: {
      // TODO: investigate what the deep mapping structure of this really is
      type: 'keyword',
    },
    entries: {
      properties: {
        field: {
          type: 'keyword',
        },
        match: {
          type: 'keyword',
        },
        match_any: {
          type: 'keyword',
        },
        operator: {
          type: 'keyword',
        },
      },
    },
    item_id: {
      type: 'keyword',
    },
  },
};

const combinedMappings: SavedObjectsType['mappings'] = {
  properties: {
    ...commonMapping.properties,
    ...exceptionListMapping.properties,
    ...exceptionListItemMapping.properties,
  },
};

export const exceptionListType: SavedObjectsType = {
  hidden: false,
  mappings: combinedMappings,
  name: exceptionListSavedObjectType,
  namespaceType: 'single',
};

export const exceptionListAgnosticType: SavedObjectsType = {
  hidden: false,
  mappings: combinedMappings,
  name: exceptionListAgnosticSavedObjectType,
  namespaceType: 'agnostic',
};