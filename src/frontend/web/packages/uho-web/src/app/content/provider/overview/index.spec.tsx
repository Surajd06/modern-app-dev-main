/*
 * Copyright (c) 2023 Oracle and/or its affiliates.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracl.com/licenses/upl/
 */
import { Overview } from '.';
import { h } from 'preact';
import { queryClient, snapshot } from '../../../../../test/jetHelper';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../../utils/authProvider';
import { User } from 'api/frontendApi';
import { QueryClientProvider } from '@tanstack/react-query';

const user: User = {
  role: 'PROVIDER',
  username: 'jsmith'
};

snapshot(
  'Provider: Overview',
  <QueryClientProvider client={queryClient}>
    <AuthContext.Provider value={{ user, signin: () => Promise.resolve(user), signout: () => console.log('signout') }}>
      <MemoryRouter>
        <Overview />
      </MemoryRouter>
    </AuthContext.Provider>
  </QueryClientProvider>
);
