export { jsLayout };

let jsLayout = {
  Parties: {
    type: 'object',
    name: 'Parties',
    docs: null,
    layout: [
      {
        key: 'feePayer',
        value: {
          type: 'object',
          name: 'ZkappPartyFeePayer',
          docs: null,
          layout: [
            {
              key: 'body',
              value: {
                type: 'object',
                name: 'FeePayerPartyBody',
                docs: null,
                layout: [
                  {
                    key: 'publicKey',
                    value: { type: 'PublicKey' },
                    docs: null,
                  },
                  {
                    key: 'update',
                    value: {
                      type: 'object',
                      name: 'PartyUpdate',
                      docs: null,
                      layout: [
                        {
                          key: 'appState',
                          value: {
                            type: 'array',
                            inner: {
                              type: 'option',
                              optionType: 'flaggedOption',
                              inner: { type: 'Field' },
                            },
                          },
                          docs: null,
                        },
                        {
                          key: 'delegate',
                          value: {
                            type: 'option',
                            optionType: 'flaggedOption',
                            inner: { type: 'PublicKey' },
                          },
                          docs: null,
                        },
                        {
                          key: 'verificationKey',
                          value: {
                            type: 'option',
                            optionType: 'flaggedOption',
                            inner: {
                              type: 'object',
                              name: 'VerificationKeyWithHash',
                              docs: null,
                              layout: [
                                {
                                  key: 'data',
                                  value: { type: 'VerificationKey' },
                                  docs: null,
                                },
                                {
                                  key: 'hash',
                                  value: { type: 'Field' },
                                  docs: null,
                                },
                              ],
                            },
                          },
                          docs: null,
                        },
                        {
                          key: 'permissions',
                          value: {
                            type: 'option',
                            optionType: 'flaggedOption',
                            inner: {
                              type: 'object',
                              name: 'Permissions',
                              docs: null,
                              layout: [
                                {
                                  key: 'editState',
                                  value: { type: 'AuthRequired' },
                                  docs: null,
                                },
                                {
                                  key: 'send',
                                  value: { type: 'AuthRequired' },
                                  docs: null,
                                },
                                {
                                  key: 'receive',
                                  value: { type: 'AuthRequired' },
                                  docs: null,
                                },
                                {
                                  key: 'setDelegate',
                                  value: { type: 'AuthRequired' },
                                  docs: null,
                                },
                                {
                                  key: 'setPermissions',
                                  value: { type: 'AuthRequired' },
                                  docs: null,
                                },
                                {
                                  key: 'setVerificationKey',
                                  value: { type: 'AuthRequired' },
                                  docs: null,
                                },
                                {
                                  key: 'setZkappUri',
                                  value: { type: 'AuthRequired' },
                                  docs: null,
                                },
                                {
                                  key: 'editSequenceState',
                                  value: { type: 'AuthRequired' },
                                  docs: null,
                                },
                                {
                                  key: 'setTokenSymbol',
                                  value: { type: 'AuthRequired' },
                                  docs: null,
                                },
                                {
                                  key: 'incrementNonce',
                                  value: { type: 'AuthRequired' },
                                  docs: null,
                                },
                                {
                                  key: 'setVotingFor',
                                  value: { type: 'AuthRequired' },
                                  docs: null,
                                },
                              ],
                            },
                          },
                          docs: null,
                        },
                        {
                          key: 'zkappUri',
                          value: {
                            type: 'option',
                            optionType: 'flaggedOption',
                            inner: { type: 'string' },
                          },
                          docs: null,
                        },
                        {
                          key: 'tokenSymbol',
                          value: {
                            type: 'option',
                            optionType: 'flaggedOption',
                            inner: { type: 'string' },
                          },
                          docs: null,
                        },
                        {
                          key: 'timing',
                          value: {
                            type: 'option',
                            optionType: 'flaggedOption',
                            inner: {
                              type: 'object',
                              name: 'Timing',
                              docs: null,
                              layout: [
                                {
                                  key: 'initialMinimumBalance',
                                  value: { type: 'Balance' },
                                  docs: null,
                                },
                                {
                                  key: 'cliffTime',
                                  value: { type: 'GlobalSlot' },
                                  docs: null,
                                },
                                {
                                  key: 'cliffAmount',
                                  value: { type: 'CurrencyAmount' },
                                  docs: null,
                                },
                                {
                                  key: 'vestingPeriod',
                                  value: { type: 'GlobalSlot' },
                                  docs: null,
                                },
                                {
                                  key: 'vestingIncrement',
                                  value: { type: 'CurrencyAmount' },
                                  docs: null,
                                },
                              ],
                            },
                          },
                          docs: null,
                        },
                        {
                          key: 'votingFor',
                          value: {
                            type: 'option',
                            optionType: 'flaggedOption',
                            inner: { type: 'StateHash' },
                          },
                          docs: null,
                        },
                      ],
                    },
                    docs: null,
                  },
                  { key: 'fee', value: { type: 'Fee' }, docs: null },
                  {
                    key: 'events',
                    value: {
                      type: 'array',
                      inner: { type: 'array', inner: { type: 'Field' } },
                    },
                    docs: null,
                  },
                  {
                    key: 'sequenceEvents',
                    value: {
                      type: 'array',
                      inner: { type: 'array', inner: { type: 'Field' } },
                    },
                    docs: null,
                  },
                  {
                    key: 'protocolStatePrecondition',
                    value: {
                      type: 'object',
                      name: 'ProtocolStatePrecondition',
                      docs: null,
                      layout: [
                        {
                          key: 'snarkedLedgerHash',
                          value: {
                            type: 'option',
                            optionType: 'flaggedOption',
                            inner: { type: 'Field' },
                          },
                          docs: null,
                        },
                        {
                          key: 'timestamp',
                          value: {
                            type: 'option',
                            optionType: 'implicit',
                            inner: {
                              type: 'object',
                              name: 'BlockTimeInterval',
                              docs: null,
                              layout: [
                                {
                                  key: 'lower',
                                  value: { type: 'BlockTime' },
                                  docs: null,
                                },
                                {
                                  key: 'upper',
                                  value: { type: 'BlockTime' },
                                  docs: null,
                                },
                              ],
                            },
                          },
                          docs: null,
                        },
                        {
                          key: 'blockchainLength',
                          value: {
                            type: 'option',
                            optionType: 'implicit',
                            inner: {
                              type: 'object',
                              name: 'LengthInterval',
                              docs: null,
                              layout: [
                                {
                                  key: 'lower',
                                  value: { type: 'UInt32' },
                                  docs: null,
                                },
                                {
                                  key: 'upper',
                                  value: { type: 'UInt32' },
                                  docs: null,
                                },
                              ],
                            },
                          },
                          docs: null,
                        },
                        {
                          key: 'minWindowDensity',
                          value: {
                            type: 'option',
                            optionType: 'implicit',
                            inner: {
                              type: 'object',
                              name: 'LengthInterval',
                              docs: null,
                              layout: [
                                {
                                  key: 'lower',
                                  value: { type: 'UInt32' },
                                  docs: null,
                                },
                                {
                                  key: 'upper',
                                  value: { type: 'UInt32' },
                                  docs: null,
                                },
                              ],
                            },
                          },
                          docs: null,
                        },
                        {
                          key: 'totalCurrency',
                          value: {
                            type: 'option',
                            optionType: 'implicit',
                            inner: {
                              type: 'object',
                              name: 'CurrencyAmountInterval',
                              docs: null,
                              layout: [
                                {
                                  key: 'lower',
                                  value: { type: 'CurrencyAmount' },
                                  docs: null,
                                },
                                {
                                  key: 'upper',
                                  value: { type: 'CurrencyAmount' },
                                  docs: null,
                                },
                              ],
                            },
                          },
                          docs: null,
                        },
                        {
                          key: 'globalSlotSinceHardFork',
                          value: {
                            type: 'option',
                            optionType: 'implicit',
                            inner: {
                              type: 'object',
                              name: 'GlobalSlotInterval',
                              docs: null,
                              layout: [
                                {
                                  key: 'lower',
                                  value: { type: 'UInt32' },
                                  docs: null,
                                },
                                {
                                  key: 'upper',
                                  value: { type: 'UInt32' },
                                  docs: null,
                                },
                              ],
                            },
                          },
                          docs: null,
                        },
                        {
                          key: 'globalSlotSinceGenesis',
                          value: {
                            type: 'option',
                            optionType: 'implicit',
                            inner: {
                              type: 'object',
                              name: 'GlobalSlotInterval',
                              docs: null,
                              layout: [
                                {
                                  key: 'lower',
                                  value: { type: 'UInt32' },
                                  docs: null,
                                },
                                {
                                  key: 'upper',
                                  value: { type: 'UInt32' },
                                  docs: null,
                                },
                              ],
                            },
                          },
                          docs: null,
                        },
                        {
                          key: 'stakingEpochData',
                          value: {
                            type: 'object',
                            name: 'EpochDataPrecondition',
                            docs: null,
                            layout: [
                              {
                                key: 'ledger',
                                value: {
                                  type: 'object',
                                  name: 'EpochLedgerPrecondition',
                                  docs: null,
                                  layout: [
                                    {
                                      key: 'hash',
                                      value: {
                                        type: 'option',
                                        optionType: 'flaggedOption',
                                        inner: { type: 'Field' },
                                      },
                                      docs: null,
                                    },
                                    {
                                      key: 'totalCurrency',
                                      value: {
                                        type: 'option',
                                        optionType: 'implicit',
                                        inner: {
                                          type: 'object',
                                          name: 'CurrencyAmountInterval',
                                          docs: null,
                                          layout: [
                                            {
                                              key: 'lower',
                                              value: { type: 'CurrencyAmount' },
                                              docs: null,
                                            },
                                            {
                                              key: 'upper',
                                              value: { type: 'CurrencyAmount' },
                                              docs: null,
                                            },
                                          ],
                                        },
                                      },
                                      docs: null,
                                    },
                                  ],
                                },
                                docs: null,
                              },
                              {
                                key: 'seed',
                                value: {
                                  type: 'option',
                                  optionType: 'flaggedOption',
                                  inner: { type: 'Field' },
                                },
                                docs: null,
                              },
                              {
                                key: 'startCheckpoint',
                                value: {
                                  type: 'option',
                                  optionType: 'flaggedOption',
                                  inner: { type: 'Field' },
                                },
                                docs: null,
                              },
                              {
                                key: 'lockCheckpoint',
                                value: {
                                  type: 'option',
                                  optionType: 'flaggedOption',
                                  inner: { type: 'Field' },
                                },
                                docs: null,
                              },
                              {
                                key: 'epochLength',
                                value: {
                                  type: 'option',
                                  optionType: 'implicit',
                                  inner: {
                                    type: 'object',
                                    name: 'LengthInterval',
                                    docs: null,
                                    layout: [
                                      {
                                        key: 'lower',
                                        value: { type: 'UInt32' },
                                        docs: null,
                                      },
                                      {
                                        key: 'upper',
                                        value: { type: 'UInt32' },
                                        docs: null,
                                      },
                                    ],
                                  },
                                },
                                docs: null,
                              },
                            ],
                          },
                          docs: null,
                        },
                        {
                          key: 'nextEpochData',
                          value: {
                            type: 'object',
                            name: 'EpochDataPrecondition',
                            docs: null,
                            layout: [
                              {
                                key: 'ledger',
                                value: {
                                  type: 'object',
                                  name: 'EpochLedgerPrecondition',
                                  docs: null,
                                  layout: [
                                    {
                                      key: 'hash',
                                      value: {
                                        type: 'option',
                                        optionType: 'flaggedOption',
                                        inner: { type: 'Field' },
                                      },
                                      docs: null,
                                    },
                                    {
                                      key: 'totalCurrency',
                                      value: {
                                        type: 'option',
                                        optionType: 'implicit',
                                        inner: {
                                          type: 'object',
                                          name: 'CurrencyAmountInterval',
                                          docs: null,
                                          layout: [
                                            {
                                              key: 'lower',
                                              value: { type: 'CurrencyAmount' },
                                              docs: null,
                                            },
                                            {
                                              key: 'upper',
                                              value: { type: 'CurrencyAmount' },
                                              docs: null,
                                            },
                                          ],
                                        },
                                      },
                                      docs: null,
                                    },
                                  ],
                                },
                                docs: null,
                              },
                              {
                                key: 'seed',
                                value: {
                                  type: 'option',
                                  optionType: 'flaggedOption',
                                  inner: { type: 'Field' },
                                },
                                docs: null,
                              },
                              {
                                key: 'startCheckpoint',
                                value: {
                                  type: 'option',
                                  optionType: 'flaggedOption',
                                  inner: { type: 'Field' },
                                },
                                docs: null,
                              },
                              {
                                key: 'lockCheckpoint',
                                value: {
                                  type: 'option',
                                  optionType: 'flaggedOption',
                                  inner: { type: 'Field' },
                                },
                                docs: null,
                              },
                              {
                                key: 'epochLength',
                                value: {
                                  type: 'option',
                                  optionType: 'implicit',
                                  inner: {
                                    type: 'object',
                                    name: 'LengthInterval',
                                    docs: null,
                                    layout: [
                                      {
                                        key: 'lower',
                                        value: { type: 'UInt32' },
                                        docs: null,
                                      },
                                      {
                                        key: 'upper',
                                        value: { type: 'UInt32' },
                                        docs: null,
                                      },
                                    ],
                                  },
                                },
                                docs: null,
                              },
                            ],
                          },
                          docs: null,
                        },
                      ],
                    },
                    docs: null,
                  },
                  { key: 'nonce', value: { type: 'UInt32' }, docs: null },
                ],
              },
              docs: null,
            },
            { key: 'authorization', value: { type: 'Signature' }, docs: null },
          ],
        },
        docs: null,
      },
      {
        key: 'otherParties',
        value: {
          type: 'array',
          inner: {
            type: 'object',
            name: 'ZkappParty',
            docs: 'A party to a zkApp transaction',
            layout: [
              {
                key: 'body',
                value: {
                  type: 'object',
                  name: 'PartyBody',
                  docs: null,
                  layout: [
                    {
                      key: 'publicKey',
                      value: { type: 'PublicKey' },
                      docs: null,
                    },
                    { key: 'tokenId', value: { type: 'TokenId' }, docs: null },
                    {
                      key: 'update',
                      value: {
                        type: 'object',
                        name: 'PartyUpdate',
                        docs: null,
                        layout: [
                          {
                            key: 'appState',
                            value: {
                              type: 'array',
                              inner: {
                                type: 'option',
                                optionType: 'flaggedOption',
                                inner: { type: 'Field' },
                              },
                            },
                            docs: null,
                          },
                          {
                            key: 'delegate',
                            value: {
                              type: 'option',
                              optionType: 'flaggedOption',
                              inner: { type: 'PublicKey' },
                            },
                            docs: null,
                          },
                          {
                            key: 'verificationKey',
                            value: {
                              type: 'option',
                              optionType: 'flaggedOption',
                              inner: {
                                type: 'object',
                                name: 'VerificationKeyWithHash',
                                docs: null,
                                layout: [
                                  {
                                    key: 'data',
                                    value: { type: 'VerificationKey' },
                                    docs: null,
                                  },
                                  {
                                    key: 'hash',
                                    value: { type: 'Field' },
                                    docs: null,
                                  },
                                ],
                              },
                            },
                            docs: null,
                          },
                          {
                            key: 'permissions',
                            value: {
                              type: 'option',
                              optionType: 'flaggedOption',
                              inner: {
                                type: 'object',
                                name: 'Permissions',
                                docs: null,
                                layout: [
                                  {
                                    key: 'editState',
                                    value: { type: 'AuthRequired' },
                                    docs: null,
                                  },
                                  {
                                    key: 'send',
                                    value: { type: 'AuthRequired' },
                                    docs: null,
                                  },
                                  {
                                    key: 'receive',
                                    value: { type: 'AuthRequired' },
                                    docs: null,
                                  },
                                  {
                                    key: 'setDelegate',
                                    value: { type: 'AuthRequired' },
                                    docs: null,
                                  },
                                  {
                                    key: 'setPermissions',
                                    value: { type: 'AuthRequired' },
                                    docs: null,
                                  },
                                  {
                                    key: 'setVerificationKey',
                                    value: { type: 'AuthRequired' },
                                    docs: null,
                                  },
                                  {
                                    key: 'setZkappUri',
                                    value: { type: 'AuthRequired' },
                                    docs: null,
                                  },
                                  {
                                    key: 'editSequenceState',
                                    value: { type: 'AuthRequired' },
                                    docs: null,
                                  },
                                  {
                                    key: 'setTokenSymbol',
                                    value: { type: 'AuthRequired' },
                                    docs: null,
                                  },
                                  {
                                    key: 'incrementNonce',
                                    value: { type: 'AuthRequired' },
                                    docs: null,
                                  },
                                  {
                                    key: 'setVotingFor',
                                    value: { type: 'AuthRequired' },
                                    docs: null,
                                  },
                                ],
                              },
                            },
                            docs: null,
                          },
                          {
                            key: 'zkappUri',
                            value: {
                              type: 'option',
                              optionType: 'flaggedOption',
                              inner: { type: 'string' },
                            },
                            docs: null,
                          },
                          {
                            key: 'tokenSymbol',
                            value: {
                              type: 'option',
                              optionType: 'flaggedOption',
                              inner: { type: 'string' },
                            },
                            docs: null,
                          },
                          {
                            key: 'timing',
                            value: {
                              type: 'option',
                              optionType: 'flaggedOption',
                              inner: {
                                type: 'object',
                                name: 'Timing',
                                docs: null,
                                layout: [
                                  {
                                    key: 'initialMinimumBalance',
                                    value: { type: 'Balance' },
                                    docs: null,
                                  },
                                  {
                                    key: 'cliffTime',
                                    value: { type: 'GlobalSlot' },
                                    docs: null,
                                  },
                                  {
                                    key: 'cliffAmount',
                                    value: { type: 'CurrencyAmount' },
                                    docs: null,
                                  },
                                  {
                                    key: 'vestingPeriod',
                                    value: { type: 'GlobalSlot' },
                                    docs: null,
                                  },
                                  {
                                    key: 'vestingIncrement',
                                    value: { type: 'CurrencyAmount' },
                                    docs: null,
                                  },
                                ],
                              },
                            },
                            docs: null,
                          },
                          {
                            key: 'votingFor',
                            value: {
                              type: 'option',
                              optionType: 'flaggedOption',
                              inner: { type: 'StateHash' },
                            },
                            docs: null,
                          },
                        ],
                      },
                      docs: null,
                    },
                    {
                      key: 'balanceChange',
                      value: {
                        type: 'object',
                        name: 'BalanceChange',
                        docs: null,
                        layout: [
                          {
                            key: 'magnitude',
                            value: { type: 'CurrencyAmount' },
                            docs: null,
                          },
                          { key: 'sgn', value: { type: 'Sign' }, docs: null },
                        ],
                      },
                      docs: null,
                    },
                    {
                      key: 'incrementNonce',
                      value: { type: 'Bool' },
                      docs: null,
                    },
                    {
                      key: 'events',
                      value: {
                        type: 'array',
                        inner: { type: 'array', inner: { type: 'Field' } },
                      },
                      docs: null,
                    },
                    {
                      key: 'sequenceEvents',
                      value: {
                        type: 'array',
                        inner: { type: 'array', inner: { type: 'Field' } },
                      },
                      docs: null,
                    },
                    { key: 'callData', value: { type: 'Field' }, docs: null },
                    { key: 'callDepth', value: { type: 'number' }, docs: null },
                    {
                      key: 'protocolStatePrecondition',
                      value: {
                        type: 'object',
                        name: 'ProtocolStatePrecondition',
                        docs: null,
                        layout: [
                          {
                            key: 'snarkedLedgerHash',
                            value: {
                              type: 'option',
                              optionType: 'flaggedOption',
                              inner: { type: 'Field' },
                            },
                            docs: null,
                          },
                          {
                            key: 'timestamp',
                            value: {
                              type: 'option',
                              optionType: 'implicit',
                              inner: {
                                type: 'object',
                                name: 'BlockTimeInterval',
                                docs: null,
                                layout: [
                                  {
                                    key: 'lower',
                                    value: { type: 'BlockTime' },
                                    docs: null,
                                  },
                                  {
                                    key: 'upper',
                                    value: { type: 'BlockTime' },
                                    docs: null,
                                  },
                                ],
                              },
                            },
                            docs: null,
                          },
                          {
                            key: 'blockchainLength',
                            value: {
                              type: 'option',
                              optionType: 'implicit',
                              inner: {
                                type: 'object',
                                name: 'LengthInterval',
                                docs: null,
                                layout: [
                                  {
                                    key: 'lower',
                                    value: { type: 'UInt32' },
                                    docs: null,
                                  },
                                  {
                                    key: 'upper',
                                    value: { type: 'UInt32' },
                                    docs: null,
                                  },
                                ],
                              },
                            },
                            docs: null,
                          },
                          {
                            key: 'minWindowDensity',
                            value: {
                              type: 'option',
                              optionType: 'implicit',
                              inner: {
                                type: 'object',
                                name: 'LengthInterval',
                                docs: null,
                                layout: [
                                  {
                                    key: 'lower',
                                    value: { type: 'UInt32' },
                                    docs: null,
                                  },
                                  {
                                    key: 'upper',
                                    value: { type: 'UInt32' },
                                    docs: null,
                                  },
                                ],
                              },
                            },
                            docs: null,
                          },
                          {
                            key: 'totalCurrency',
                            value: {
                              type: 'option',
                              optionType: 'implicit',
                              inner: {
                                type: 'object',
                                name: 'CurrencyAmountInterval',
                                docs: null,
                                layout: [
                                  {
                                    key: 'lower',
                                    value: { type: 'CurrencyAmount' },
                                    docs: null,
                                  },
                                  {
                                    key: 'upper',
                                    value: { type: 'CurrencyAmount' },
                                    docs: null,
                                  },
                                ],
                              },
                            },
                            docs: null,
                          },
                          {
                            key: 'globalSlotSinceHardFork',
                            value: {
                              type: 'option',
                              optionType: 'implicit',
                              inner: {
                                type: 'object',
                                name: 'GlobalSlotInterval',
                                docs: null,
                                layout: [
                                  {
                                    key: 'lower',
                                    value: { type: 'UInt32' },
                                    docs: null,
                                  },
                                  {
                                    key: 'upper',
                                    value: { type: 'UInt32' },
                                    docs: null,
                                  },
                                ],
                              },
                            },
                            docs: null,
                          },
                          {
                            key: 'globalSlotSinceGenesis',
                            value: {
                              type: 'option',
                              optionType: 'implicit',
                              inner: {
                                type: 'object',
                                name: 'GlobalSlotInterval',
                                docs: null,
                                layout: [
                                  {
                                    key: 'lower',
                                    value: { type: 'UInt32' },
                                    docs: null,
                                  },
                                  {
                                    key: 'upper',
                                    value: { type: 'UInt32' },
                                    docs: null,
                                  },
                                ],
                              },
                            },
                            docs: null,
                          },
                          {
                            key: 'stakingEpochData',
                            value: {
                              type: 'object',
                              name: 'EpochDataPrecondition',
                              docs: null,
                              layout: [
                                {
                                  key: 'ledger',
                                  value: {
                                    type: 'object',
                                    name: 'EpochLedgerPrecondition',
                                    docs: null,
                                    layout: [
                                      {
                                        key: 'hash',
                                        value: {
                                          type: 'option',
                                          optionType: 'flaggedOption',
                                          inner: { type: 'Field' },
                                        },
                                        docs: null,
                                      },
                                      {
                                        key: 'totalCurrency',
                                        value: {
                                          type: 'option',
                                          optionType: 'implicit',
                                          inner: {
                                            type: 'object',
                                            name: 'CurrencyAmountInterval',
                                            docs: null,
                                            layout: [
                                              {
                                                key: 'lower',
                                                value: {
                                                  type: 'CurrencyAmount',
                                                },
                                                docs: null,
                                              },
                                              {
                                                key: 'upper',
                                                value: {
                                                  type: 'CurrencyAmount',
                                                },
                                                docs: null,
                                              },
                                            ],
                                          },
                                        },
                                        docs: null,
                                      },
                                    ],
                                  },
                                  docs: null,
                                },
                                {
                                  key: 'seed',
                                  value: {
                                    type: 'option',
                                    optionType: 'flaggedOption',
                                    inner: { type: 'Field' },
                                  },
                                  docs: null,
                                },
                                {
                                  key: 'startCheckpoint',
                                  value: {
                                    type: 'option',
                                    optionType: 'flaggedOption',
                                    inner: { type: 'Field' },
                                  },
                                  docs: null,
                                },
                                {
                                  key: 'lockCheckpoint',
                                  value: {
                                    type: 'option',
                                    optionType: 'flaggedOption',
                                    inner: { type: 'Field' },
                                  },
                                  docs: null,
                                },
                                {
                                  key: 'epochLength',
                                  value: {
                                    type: 'option',
                                    optionType: 'implicit',
                                    inner: {
                                      type: 'object',
                                      name: 'LengthInterval',
                                      docs: null,
                                      layout: [
                                        {
                                          key: 'lower',
                                          value: { type: 'UInt32' },
                                          docs: null,
                                        },
                                        {
                                          key: 'upper',
                                          value: { type: 'UInt32' },
                                          docs: null,
                                        },
                                      ],
                                    },
                                  },
                                  docs: null,
                                },
                              ],
                            },
                            docs: null,
                          },
                          {
                            key: 'nextEpochData',
                            value: {
                              type: 'object',
                              name: 'EpochDataPrecondition',
                              docs: null,
                              layout: [
                                {
                                  key: 'ledger',
                                  value: {
                                    type: 'object',
                                    name: 'EpochLedgerPrecondition',
                                    docs: null,
                                    layout: [
                                      {
                                        key: 'hash',
                                        value: {
                                          type: 'option',
                                          optionType: 'flaggedOption',
                                          inner: { type: 'Field' },
                                        },
                                        docs: null,
                                      },
                                      {
                                        key: 'totalCurrency',
                                        value: {
                                          type: 'option',
                                          optionType: 'implicit',
                                          inner: {
                                            type: 'object',
                                            name: 'CurrencyAmountInterval',
                                            docs: null,
                                            layout: [
                                              {
                                                key: 'lower',
                                                value: {
                                                  type: 'CurrencyAmount',
                                                },
                                                docs: null,
                                              },
                                              {
                                                key: 'upper',
                                                value: {
                                                  type: 'CurrencyAmount',
                                                },
                                                docs: null,
                                              },
                                            ],
                                          },
                                        },
                                        docs: null,
                                      },
                                    ],
                                  },
                                  docs: null,
                                },
                                {
                                  key: 'seed',
                                  value: {
                                    type: 'option',
                                    optionType: 'flaggedOption',
                                    inner: { type: 'Field' },
                                  },
                                  docs: null,
                                },
                                {
                                  key: 'startCheckpoint',
                                  value: {
                                    type: 'option',
                                    optionType: 'flaggedOption',
                                    inner: { type: 'Field' },
                                  },
                                  docs: null,
                                },
                                {
                                  key: 'lockCheckpoint',
                                  value: {
                                    type: 'option',
                                    optionType: 'flaggedOption',
                                    inner: { type: 'Field' },
                                  },
                                  docs: null,
                                },
                                {
                                  key: 'epochLength',
                                  value: {
                                    type: 'option',
                                    optionType: 'implicit',
                                    inner: {
                                      type: 'object',
                                      name: 'LengthInterval',
                                      docs: null,
                                      layout: [
                                        {
                                          key: 'lower',
                                          value: { type: 'UInt32' },
                                          docs: null,
                                        },
                                        {
                                          key: 'upper',
                                          value: { type: 'UInt32' },
                                          docs: null,
                                        },
                                      ],
                                    },
                                  },
                                  docs: null,
                                },
                              ],
                            },
                            docs: null,
                          },
                        ],
                      },
                      docs: null,
                    },
                    {
                      key: 'accountPrecondition',
                      value: {
                        type: 'object',
                        name: 'AccountPrecondition',
                        docs: null,
                        layout: [
                          {
                            key: 'balance',
                            value: {
                              type: 'option',
                              optionType: 'implicit',
                              inner: {
                                type: 'object',
                                name: 'BalanceInterval',
                                docs: null,
                                layout: [
                                  {
                                    key: 'lower',
                                    value: { type: 'Balance' },
                                    docs: null,
                                  },
                                  {
                                    key: 'upper',
                                    value: { type: 'Balance' },
                                    docs: null,
                                  },
                                ],
                              },
                            },
                            docs: null,
                          },
                          {
                            key: 'nonce',
                            value: {
                              type: 'option',
                              optionType: 'implicit',
                              inner: {
                                type: 'object',
                                name: 'NonceInterval',
                                docs: null,
                                layout: [
                                  {
                                    key: 'lower',
                                    value: { type: 'UInt32' },
                                    docs: null,
                                  },
                                  {
                                    key: 'upper',
                                    value: { type: 'UInt32' },
                                    docs: null,
                                  },
                                ],
                              },
                            },
                            docs: null,
                          },
                          {
                            key: 'receiptChainHash',
                            value: {
                              type: 'option',
                              optionType: 'flaggedOption',
                              inner: { type: 'Field' },
                            },
                            docs: null,
                          },
                          {
                            key: 'delegate',
                            value: {
                              type: 'option',
                              optionType: 'flaggedOption',
                              inner: { type: 'PublicKey' },
                            },
                            docs: null,
                          },
                          {
                            key: 'state',
                            value: {
                              type: 'array',
                              inner: {
                                type: 'option',
                                optionType: 'flaggedOption',
                                inner: { type: 'Field' },
                              },
                            },
                            docs: null,
                          },
                          {
                            key: 'sequenceState',
                            value: {
                              type: 'option',
                              optionType: 'flaggedOption',
                              inner: { type: 'Field' },
                            },
                            docs: null,
                          },
                          {
                            key: 'provedState',
                            value: {
                              type: 'option',
                              optionType: 'flaggedOption',
                              inner: { type: 'Bool' },
                            },
                            docs: null,
                          },
                        ],
                      },
                      docs: null,
                    },
                    {
                      key: 'useFullCommitment',
                      value: { type: 'Bool' },
                      docs: null,
                    },
                    { key: 'caller', value: { type: 'TokenId' }, docs: null },
                  ],
                },
                docs: null,
              },
              {
                key: 'authorization',
                value: {
                  type: 'object',
                  name: 'Control',
                  docs: null,
                  layout: [
                    {
                      key: 'proof',
                      value: {
                        type: 'option',
                        optionType: 'orUndefined',
                        inner: { type: 'SnappProof' },
                      },
                      docs: null,
                    },
                    {
                      key: 'signature',
                      value: {
                        type: 'option',
                        optionType: 'orUndefined',
                        inner: { type: 'Signature' },
                      },
                      docs: null,
                    },
                  ],
                },
                docs: null,
              },
            ],
          },
        },
        docs: null,
      },
      { key: 'memo', value: { type: 'Memo' }, docs: null },
    ],
  },
  BalanceChange: {
    type: 'object',
    name: 'BalanceChange',
    docs: null,
    layout: [
      { key: 'magnitude', value: { type: 'CurrencyAmount' }, docs: null },
      { key: 'sgn', value: { type: 'Sign' }, docs: null },
    ],
  },
};
