import {  Flex, Text, Heading, Link, Button } from '@spurdex/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import Image from 'next/image'
import HighPassiveIncome from '../../../../public/images/home/high-passive-Income.png'
import ColoredWordHeading from './ColoredWordHeading'

const Home3 = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const  primaryButton = {
    to: '/farms',
    text: 'Explore',
    external: false
  }
  return (
    <>     
      <Flex
        position="relative"
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
        mt={[account ? '280px' : '50px', null, 0]}
        id="homepage-home3"
      >
        <Flex
          height={['192px', null, null, '100%']}
          width={['192px', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
          position="relative"
        >
          <Image src={HighPassiveIncome} priority placeholder="blur" alt={t('SpurDex')} />
        </Flex>
        <Flex flex="1" flexDirection="column">
          <ColoredWordHeading text={t('High Passive Income')} />          
          <Text color="card" fontSize="18px" mb="40px" mt="20px">
            {t('You earn SPDX and other tokens with enormous interest rates for free.')}
          </Text>
          <Flex>
            <Button mr="16px">
              <Link external href={primaryButton.to}>
                <Text color="#06138A" bold fontSize="16px">
                  {primaryButton.text}
                </Text>
              </Link>  
            </Button>
          </Flex>
          
        </Flex>        
      </Flex>
    </>
  )
}

export default Home3
