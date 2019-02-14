# DucksCounter
Created with CodeSandbox
Ducks sample

# src 以下の構成

## components
コンポーネント(画面構成パーツ)定義を記述
- ファイル構成はパーツ単位
- componentクラス定義
- proptypes

## containers
コンテナ(Connectするコンポーネント)定義を記述
- connect
- mapStatetoProps
- mapDispatchtoProps

## modules
Action Type, Action Creater, Reducerを記述
ファイル構成はメニュー単位

### root_reducer
Reducerの取りまとめ
combined_reducer

## store
基本的に変更は不要
運用環境、開発環境を分離
store,middlewareの設定
log, debug環境の設定
