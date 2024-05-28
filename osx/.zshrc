
[[ -f ~/.zsh/aliases.zsh ]] && source ~/.zsh/aliases.zsh
[[ -f ~/.zsh/bindkeys.zsh ]] && source ~/.zsh/bindkeys.zsh
# [[ -f ~/.zsh/functions.zsh ]] && source ~/.zsh/functions.zsh
[[ -f ~/.zsh/starship.zsh ]] && source ~/.zsh/starship.zsh
[[ -f ~/.zsh/nvm.zsh ]] && source ~/.zsh/nvm.zsh
# [[ -f ~/.zsh/wsl2fix.zsh ]] && source ~/.zsh/wsl2fix.zsh
# [[ -f ~/.zsh/goto.zsh ]] && source ~/.zsh/goto.zsh

# Load Starship
eval "$(starship init zsh)"

# Load Direnv
# eval "$(direnv hook zsh)"

export GPG_TTY=$(tty)

# Load Angular CLI autocompletion.
# source <(ng completion script)
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"

if [ "$(arch)" = "arm64" ]; then
    eval "$(/opt/homebrew/bin/brew shellenv)"
else
    eval "$(/usr/local/bin/brew shellenv)"
fi

PATH=~/.console-ninja/.bin:$PATH

# Android Studio for Tauri
export JAVA_HOME="/Applications/Android Studio.app/Contents/jbr/Contents/Home"

export ANDROID_HOME="$HOME/Library/Android/sdk"
export NDK_HOME="$ANDROID_HOME/ndk/26.2.11394342"

export PATH="/opt/homebrew/opt/php@8.1/bin:$PATH"
export PATH="/opt/homebrew/opt/php@8.1/sbin:$PATH"
