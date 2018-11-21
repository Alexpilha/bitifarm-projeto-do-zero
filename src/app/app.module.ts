import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from '@angular/fire';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AnalisesPage } from '../pages/analises/analises';
import { NoticiasPage } from '../pages/noticias/noticias';
import { AnalistasPage } from '../pages/analistas/analistas';
import { ProgamacaoPage } from '../pages/progamacao/progamacao';
import { ForumPage } from '../pages/forum/forum';
import { RankingPage } from '../pages/ranking/ranking';
import { ComunidadePage } from '../pages/comunidade/comunidade';
import { IndicacoesPage } from '../pages/indicacoes/indicacoes';
import { PontuacaoPage } from '../pages/pontuacao/pontuacao';
import { TradePage } from '../pages/trade/trade';
import { PublicarPage } from '../pages/publicar/publicar';
import { FundoPage } from '../pages/fundo/fundo';
import { ContaPage } from '../pages/conta/conta';
import { LoginPage } from '../pages/login/login';
import { CadastrarPage } from '../pages/cadastrar/cadastrar';
import { environment } from '../environment/environment';
import { AngularFireAuth } from '@angular/fire/auth';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AnalisesPage,
    NoticiasPage,
    AnalistasPage,
    ProgamacaoPage,
    ForumPage,
    RankingPage,
    ComunidadePage,
    IndicacoesPage,
    PontuacaoPage,
    TradePage,
    PublicarPage,
    FundoPage,
    ContaPage,
    LoginPage,
    CadastrarPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AnalisesPage,
    NoticiasPage,
    AnalistasPage,
    ProgamacaoPage,
    ForumPage,
    RankingPage,
    ComunidadePage,
    IndicacoesPage,
    PontuacaoPage,
    TradePage,
    PublicarPage,
    FundoPage,
    ContaPage,
    LoginPage,
    CadastrarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
