package Chernovik_1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Chernovik_1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Списоккк
 */
@Entity(name = "IISChernovik_1Списоккк")
@Table(schema = "public", name = "Списоккк")
public class Spisokkk {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Spisok")
    @Convert("Spisok")
    @Column(name = "Список", length = 16, unique = true, nullable = false)
    private UUID _spisokid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Spisok", insertable = false, updatable = false)
    private Spisok spisok;


    public Spisokkk() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}