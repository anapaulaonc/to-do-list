actor {
  public query func greet(task : Text) : async Text {
    return "-" # task # "";
  };

  var value : Int = 0;

    // Função para definir o valor
    public func setValue(newValue: Int) : async () {
        value := newValue;
    };

    // Função para retornar o valor
    public func getValue() : async Int {
        return value;
    };


};
