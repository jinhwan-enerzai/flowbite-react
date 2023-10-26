'use client';

import type { useInteractions } from '@floating-ui/react';
import { createContext, useContext } from 'react';
import type { DeepPartial } from '../../types';
import type { FlowbiteDropdownTheme } from './Dropdown';

type DropdownContext = {
  theme?: DeepPartial<FlowbiteDropdownTheme>;
  dismissOnClick?: boolean;
  getItemProps: ReturnType<typeof useInteractions>['getItemProps'];
  dismiss: () => void;
};

export const DropdownContext = createContext<DropdownContext | undefined>(undefined);

export function useDropdownContext(): DropdownContext {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error('useDropdownContext should be used within the DropdownContext provider!');
  }

  return context;
}
