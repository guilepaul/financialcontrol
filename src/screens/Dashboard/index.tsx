import React from 'react';

import * as S from './styles'
import {HighlightCard} from '../../components/HighlightCard';

export function Dashboard(){
    return(
        <S.Container>
            <S.Header >
                <S.UserWrapper>
                    <S.UserInfo>
                        <S.Photo source={{uri: 'https://avatars.githubusercontent.com/u/44080230?v=4' }} />
                        <S.User>
                            <S.UserGreeting>Olá, </S.UserGreeting>
                            <S.UserName>Guilherme</S.UserName>
                        </S.User>
                    </S.UserInfo>
                    <S.Icon name='power' />
                </S.UserWrapper>
            </S.Header>
            <S.HighLightCards 
                
                >
                <HighlightCard 
                title= 'Entradas'
                amount="R$ 17.400,00"
                lastTransaction='Última entrada dia 12 de abril'
                type= 'up'
                />
                <HighlightCard 
                title= 'Saídas'
                amount="R$ 1.259,00"
                lastTransaction='Última saída dia 03 de abril'
                type='down'
                />
                <HighlightCard 
                title= 'Total'
                amount="R$ 16.141,00"
                lastTransaction='01 à 16 de abril'
                type='total'
                />
            </S.HighLightCards>
        </S.Container>
    )
}

