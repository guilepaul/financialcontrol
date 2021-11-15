import React from 'react';

import * as S from './styles'
import {HighlightCard} from '../../components/HighlightCard';
import {TransactionCard, TransactionCardProps} from '../../components/TransactionCard';

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard(){

    const data : DataListProps[] = [
        {
        id: '1',
        type: 'positive',
        title:'Desenvolvimento de sites',
        amount:'R$ 12.000,00',
        category:{
            name: 'Vendas',
            icon: 'dollar-sign'
        },
        date:'13/04/2020'  
    },
        {
        id: '2',
        type: 'negative',
        title:'Hamburgueria Pizzy',
        amount:'R$ 59,00',
        category:{
            name: 'Alimentação',
            icon: 'coffee'
        },
        date:'12/04/2020'  
    },
        {
        id: '3',
        type: 'negative',
        title:'Aluguel apartamento',
        amount:'R$ 1.200,00',
        category:{
            name: 'Casa',
            icon: 'shopping-bag'
        },
        date:'11/04/2020'  
    },
]
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

            <S.Transactions>
                <S.Title>Listagem</S.Title>
                <S.TransactionList 
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <TransactionCard data={item} />}
                />
                
            </S.Transactions>
        </S.Container>
    )
}

