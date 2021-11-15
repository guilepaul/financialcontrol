import React from 'react';

import * as S from './styles'
import HighlightCard from '../../components/HighlightCard';

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
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
            </S.HighLightCards>
        </S.Container>
    )
}

