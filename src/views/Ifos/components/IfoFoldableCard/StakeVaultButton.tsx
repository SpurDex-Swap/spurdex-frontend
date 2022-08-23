import { Button } from '@spurdex/uikit'

import { useTranslation } from 'contexts/Localization'

const StakeVaultButton = (props) => {
  const { t } = useTranslation()

  return (
    <Button {...props} disabled>
      {t('Stake SPDX in IFO pool')}
    </Button>
  )
}

export default StakeVaultButton
